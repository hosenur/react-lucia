import express from "express";
import { db, lucia } from "./utils/lucia";
import { generateMagicLink } from "./utils/auth";
import { generateId } from "lucia";
import { sendMagicLink } from "./utils/mailer";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./utils/env";
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
const port = 8080;


app.post("/magic", async (req, res) => {
    const { email } = req.body;
    const userExists = await db.user.findUnique({
        where: { email: email }
    });
    if (!userExists) {
        const user = await db.user.create({
            data: {
                id: generateId(15),
                email: email
            }
        });
        const URL = generateMagicLink(user.id);
        await sendMagicLink(email, URL);
    }
    if (userExists) {
        const URL = generateMagicLink(userExists.id);
        await sendMagicLink(email, URL);
    }
    res.json({ message: `Magic link sent to ${email}` });
})

app.post("/verify", async (req, res) => {
    const { token } = req.body;
    const { userId } = jwt.verify(token, env.JWT_SECRET) as { email: string, userId: string };
    const session = await lucia.createSession(userId, {
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    return res.cookie(sessionCookie.name, sessionCookie.value, sessionCookie.attributes).json({ message: "Session created" });
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});