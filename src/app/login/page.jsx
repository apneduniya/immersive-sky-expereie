"use client"

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import BottomGradient from "@/components/common/BottomGradient";
import { User2 } from "lucide-react";
import ContextMenu from "@/components/layout/NavContextMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api/auth";
import { getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from "@/utils/updateBGImg";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        // if (!terms) {
        //     alert("Please accept terms and conditions");
        //     return;
        // }

        setLoading(true);

        const username = email;
        const data = await loginUser({
            username,
            password
        });

        setLoading(false);

        if (data.success) {
            router.push("/");
        } else {
            alert("Login failed!");
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
                    <div className="px-5 lg:px-10 py-5 w-dvw max-w-[520px]">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent relative z-30 focus:!outline-none" />
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center">
                                <Input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="w-full h-12 text-center bg-transparent placeholder:text-black border border-white text-xs !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent relative z-30 focus:!outline-none" />
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>
                            {/* <div className="mt-4 items-top flex space-x-2">
                                <Checkbox id="terms1" checked={terms} onClick={() => setTerms(!terms)} />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm text-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                                    >
                                        Terms and conditions
                                    </label>
                                    <p className="text-sm text-white">
                                        You agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </div> */}
                            <button className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center" type="submit" disabled={loading}>
                                <span className="z-30">Sign In</span>
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </button>

                            {/* <div className="bg-gradient-to-r from-transparent via-neutral-500  to-transparent my-8 h-[1px] w-full" /> */}

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
                            <div className="relative z-10 h-12 w-full bg- rounded-lg flex items-center justify-center cursor-pointer my-4">
                                <span className="z-30">Enter as a guest</span>
                                <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                            </div>
                        </Link>

                        <p className="text-sm text-gray-700 mt-2 text-center">
                            {/* Do not have an account?{" "} */}
                            <Link href="/register"><span className="text-zinc-950 underline font-bold">Sign Up</span></Link>
                        </p>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}


