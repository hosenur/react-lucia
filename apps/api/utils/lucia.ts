import { Lucia } from 'lucia'
import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();
const adapter = new PrismaAdapter(db.session, db.user)
export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: process.env.NODE_ENV === "production"
        }
    }
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
    }
}