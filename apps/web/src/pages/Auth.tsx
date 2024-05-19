
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export function Auth() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="hello@hosenur.email"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Me A Magic Link
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login With OTP
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
