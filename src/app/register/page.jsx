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
    const [username, setUsername] = useState("abc2");
    const [email, setEmail] = useState("abc2@example.com");
    const [password, setPassword] = useState("12345678");
    const [confirmPassword, setConfirmPassword] = useState("12345678");
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
                            <Input type="text" placeholder="Username" onChange={handleUsernameChange} value={username} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />
                            <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} value={confirmPassword} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs" />

                            {/* <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2">
                                Sign Up
                            </button> */}
                            <button className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center" type="submit" disabled={loading}>
                                <span className="z-30">Sign Up</span>
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
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


