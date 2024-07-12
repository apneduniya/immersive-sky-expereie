"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import BottomGradient from "@/components/common/BottomGradient";
import { User2 } from "lucide-react";
import ContextMenu from "@/components/layout/NavContextMenu";
import Link from "next/link";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        if (!terms) {
            alert("Please accept terms and conditions");
            return;
        }

        console.log("Email:", email);
        console.log("Password", password);
    }

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full flex items-center justify-center bg-img-bg-8 bg-cover bg-center">
                    <div>
                        <form className="flex flex-col gap-4 px-5 lg:px-10 py-5 w-dvw max-w-[520px]" onSubmit={handleSubmit}>
                            <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className="w-full h-12" />
                            <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12" />
                            <div className="mt-4 items-top flex space-x-2">
                                <Checkbox id="terms1" checked={terms} onClick={() => setTerms(!terms)} />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Accept terms and conditions
                                    </label>
                                    <p className="text-sm text-gray-700">
                                        You agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </div>
                            <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2" type="submit">
                                Sign In
                            </button>

                            <div className="bg-gradient-to-r from-transparent via-neutral-500  to-transparent my-8 h-[1px] w-full" />

                            {/* <Link href="/register">
                                <button
                                    className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full rounded-md h-12 font-medium shadow-input bg-zinc-950 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                    type="submit"
                                >
                                    <User2 className="w-4 h-4 text-neutral-200" />
                                    <span className="text-neutral-200 text-sm">
                                        Sign Up
                                    </span>
                                    <BottomGradient />
                                </button>
                            </Link> */}
                            <button
                                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full rounded-md h-12 font-medium shadow-input bg-zinc-950 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            >
                                <User2 className="w-4 h-4 text-neutral-200" />
                                <span className="text-neutral-200 text-sm">
                                    Enter as a guest
                                </span>
                                <BottomGradient />
                            </button>

                            <p className="text-sm text-gray-700 mt-2 text-center">
                                Do not have an account?{" "} <Link href="/register"><span className="text-zinc-950 underline font-bold">Sign Up</span></Link>
                            </p>
                        </form>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}


