import * as envalid from "envalid";
import * as dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

export const env = envalid.cleanEnv(process.env, {
    JWT_SECRET: envalid.str(),
    RESEND_API_KEY: envalid.str(),
    SMTP_HOST: envalid.str(),
    SMTP_USER: envalid.str(),
    SMTP_PASS: envalid.str(),
    SMPT_FROM: envalid.email()
});