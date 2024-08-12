"use client"

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import ContextMenu from "@/components/layout/NavContextMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/api/auth";
import { getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from "@/utils/updateBGImg";


export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

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

    const handleSubmit = async (e) => {
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

        if (!terms) {
            alert("Please accept terms and conditions");
            return;
        }

        setLoading(true);

        const data = await registerUser({
            username,
            email,
            password
        });

        setLoading(false);

        if (data.success) {
            router.push("/");
        } else {
            alert("Registration failed!");
        }

    }

    useEffect(() => {
        const fetchURL = async () => {
            try {
                const fetchedUrl = await getNewAssetURL();
                updateBackgroundImage(fetchedUrl.data);
            } catch (error) {
                console.error("Failed to fetch new asset URL", error);
            }
        };

        fetchURL();
        const intervalId = setInterval(fetchURL, process.env.NEXT_PUBLIC_LATEST_IMG_FETCH_TIME); // 1000 milliseconds = 1 second

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <ContextMenu>
                <main className="main flex items-center justify-center">
                    <div>
                        <form className="flex flex-col gap-4 px-5 lg:px-10 py-5 w-dvw max-w-[520px]" onSubmit={handleSubmit}>
                            {/* <Input type="text" placeholder="Username" onChange={handleUsernameChange} value={username} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} value={confirmPassword} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" /> */}
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <Input type="text" placeholder="Username" onChange={handleUsernameChange} value={username} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent relative z-30 focus:!outline-none" />
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent relative z-30 focus:!outline-none" />
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent relative z-30 focus:!outline-none" />
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} value={confirmPassword} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent relative z-30 focus:!outline-none" />
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>

                            {/* <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2">
                                Sign Up
                            </button> */}
                            <button className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center" type="submit" disabled={loading}>
                                <span className="z-30">Sign Up</span>
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </button>
                            <div className="mt-4 flex space-x-2 w-full">
                                <Checkbox id="terms1" checked={terms} onClick={() => setTerms(!terms)} className="border-black" />
                                <div className="leading-none flex justify-center w-full">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm text-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                                    >
                                        Terms and conditions
                                    </label>
                                </div>
                            </div>

                        </form>
                            <p className="text-sm text-gray-700 text-center">
                                {/* Already have an account?{" "}  */}
                                <Link href="/login"><span className="text-zinc-950 underline font-bold">Sign In</span></Link>
                            </p>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}


