import jwt from 'jsonwebtoken';
import { env } from './env';
export const generateMagicLink = (userId: string) => {
    const token = jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: "5m" })
    const URL = `http://localhost:5173/verify/${token}`
    return URL
}