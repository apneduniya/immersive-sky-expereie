"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import BottomGradient from "@/components/common/BottomGradient";
import { User2 } from "lucide-react";
import ContextMenu from "@/components/layout/NavContextMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);

    const router = useRouter();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!email || !password) {
        //     alert("Please fill in all fields");
        //     return;
        // }

        // if (!terms) {
        //     alert("Please accept terms and conditions");
        //     return;
        // }

        // console.log("Email:", email);
        // console.log("Password", password);

        // window.location.href = "/upload-image";
        router.push("/upload-image");
    }

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full flex items-center justify-center bg-img-bg-8 bg-cover bg-center">
                    <div className="px-5 lg:px-10 py-5 w-dvw max-w-[520px]">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <Input type="email" placeholder="Email/Phone" onChange={handleEmailChange} value={email} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <div className="mt-4 items-top flex space-x-2">
                                <Checkbox id="terms1" checked={terms} onClick={() => setTerms(!terms)} />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm text-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                                    >
                                        Accept terms and conditions
                                    </label>
                                    <p className="text-sm text-white">
                                        You agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </div>
                            <button className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center" type="submit">
                                <span className="z-30">Sign In</span>
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
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
                        </form>
                        <Link href="/upload-image">
                            {/* <button
                                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full rounded-md h-12 font-medium shadow-input bg-zinc-950 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            >
                                <User2 className="w-4 h-4 text-neutral-200" />
                                <span className="text-neutral-200 text-sm">
                                    Enter as a guest
                                </span>
                                <BottomGradient />
                            </button> */}
                            <button className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <span className="z-30">Enter as a guest</span>
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </button>
                        </Link>

                        <p className="text-sm text-gray-700 mt-2 text-center">
                            Do not have an account?{" "} <Link href="/register"><span className="text-zinc-950 underline font-bold">Sign Up</span></Link>
                        </p>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}


