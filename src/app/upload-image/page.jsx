"use client"

import { DatePicker } from "@/components/common/DatePicker";
import ContextMenu from "@/components/layout/NavContextMenu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function UploadPage() {
    const [date, setDate] = useState();

    useEffect(() => {
        console.log(date);
    }, [date])

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full bg-img-bg-8 bg-cover bg-center px-5 md:px-20 py-5">
                    {/* Header (Avatar container) */}
                    <Link href="/profile">
                        <div className="w-full flex justify-end">
                            <div className="h-10 w-10 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white overflow-hidden cursor-pointer">
                                <Image src={"https://static.vecteezy.com/system/resources/previews/005/545/335/large_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"} height={320} width={320} alt="User avatar" />
                            </div>
                        </div>
                    </Link>
                    {/* Main container */}
                    <div>
                        <h2 className="mt-5 lg:text-3xl text-2xl font-bold">
                            Image Upload & Details
                        </h2>
                        <div className="mt-10 flex justify-between">
                            {/* Image */}
                            <div className="lg:max-w-[40%] lg:w-fit w-full">
                                <Image src={"https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} alt="User upload" className="rounded-xl h-72 object-cover flex-shrink-0" />
                                <div className="mt-8 flex justify-between">
                                    <button className="relative inline-flex h-12 lg:w-2/5 w-full overflow-hidden rounded-2xl p-[1px]">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                            Upload
                                        </span>
                                    </button>
                                    <button className="inline-flex h-12 lg:w-2/5 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2">
                                        Preview
                                    </button>
                                </div>
                                <div className="grid w-full gap-1.5 mt-10">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea placeholder="Forcast Story" id="description" />
                                </div>
                            </div>
                            {/* Image details form */}
                            <div className="lg:max-w-[50%] w-full">
                                <div className="w-full flex justify-between">
                                    <Input type="text" placeholder="Disaster" className="lg:max-w-[30%] w-full" />
                                    <Input type="number" placeholder="Year" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="Place" className="lg:max-w-[30%] w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5">
                                    <Input type="text" placeholder="Longitude" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="Latitude" className="lg:max-w-[30%] w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5">
                                    <Input type="text" placeholder="Day" className="lg:max-w-[30%] w-full" />
                                    <DatePicker onChange={(date) => setDate(date)} className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="Time" className="lg:max-w-[30%] w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5">
                                    <Input type="text" placeholder="File Name" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="File Size" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="File Type" className="lg:max-w-[30%] w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5">
                                    <Input type="text" placeholder="Archival" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="Dimensions" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="Camera Model" className="lg:max-w-[30%] w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5">
                                    <Input type="text" placeholder="Exposure Time" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="ISO" className="lg:max-w-[30%] w-full" />
                                    <Input type="text" placeholder="Focal Length" className="lg:max-w-[30%] w-full" />
                                </div>

                                <div className="w-full flex justify-center mt-10">
                                    <button className="inline-flex h-12 lg:w-1/3 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}