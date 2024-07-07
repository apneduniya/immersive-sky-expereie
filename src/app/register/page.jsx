"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import ContextMenu from "@/components/layout/NavContextMenu";
import Link from "next/link";


export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password", password);
    }

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full flex items-center justify-center bg-img-bg-8 bg-cover bg-center">
                    <div>
                        <form className="flex flex-col gap-4 px-5 lg:px-10 py-5 w-dvw max-w-[520px]" onSubmit={handleSubmit}>
                            <Input type="text" placeholder="Username" onChange={handleUsernameChange} value={username} className="w-full h-12" />
                            <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className="w-full h-12" />
                            <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12" />
                            <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} value={confirmPassword} className="w-full h-12" />

                            <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2">
                                Sign Up
                            </button>

                            <p className="text-sm text-gray-700 mt-2 text-center">
                                Already have an account?{" "} <Link href="/login"><span className="text-zinc-950 underline font-bold">Sign In</span></Link>
                            </p>
                        </form>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}


