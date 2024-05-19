import nodemailer from 'nodemailer';
import { env } from './env';
export const transport = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: 2525,
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
    }
});

export const sendMagicLink = async (email: string, URL: string) => {
    await transport.sendMail({
        from: env.SMPT_FROM,
        to: email,
        subject: "Magic Link",
        html: `<a href="${URL}">Login</a>`
    });
}