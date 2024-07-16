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
                        <div className="mt-10 flex justify-between xl:flex-row flex-col items-center xl:items-start gap-10">
                            {/* Image */}
                            <div className="xl:max-w-[40%] xl:w-fit w-full flex flex-col">
                                <Image src={"https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} alt="User upload" className="rounded-xl h-72 object-cover flex-shrink-0 self-center" />
                                <div className="mt-8 flex justify-between gap-5 flex-col sm:flex-row">
                                    <button className="relative z-10 h-12 xl:w-2/5 w-full bg- rounded-lg flex items-center justify-center" type="submit">
                                        <span className="z-30">
                                            Upload
                                        </span>
                                        <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                                    </button>
                                    <button className="relative z-10 h-12 xl:w-2/5 w-full bg- rounded-lg flex items-center justify-center" type="submit">
                                        <span className="z-30">
                                            Preview
                                        </span>
                                        <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                                    </button>
                                </div>
                                <div className="grid w-full gap-1.5 mt-10">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea placeholder="Forcast Story" id="description" className="bg-transparent border-none placeholder:text-black text-center" />
                                </div>
                            </div>
                            {/* Image details form */}
                            <div className="xl:max-w-[50%] w-full">
                                <div className="w-full flex justify-between flex-col sm:flex-row gap-5 ">
                                    <Input type="text" placeholder="Disaster" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="number" placeholder="Year" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="Place" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <Input type="text" placeholder="Longitude" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="Latitude" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <Input type="text" placeholder="Day" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <DatePicker onChange={(date) => setDate(date)} className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="Time" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <Input type="text" placeholder="File Name" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="File Size" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="File Type" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <Input type="text" placeholder="Archival" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="Dimensions" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="Camera Model" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <Input type="text" placeholder="Exposure Time" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="ISO" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                    <Input type="text" placeholder="Focal Length" className="lg:max-w-[30%] bg-transparent border-none placeholder:text-black text-center w-full" />
                                </div>

                                <div className="w-full flex justify-center mt-10">
                                    <button className="relative z-10 h-12 xl:w-1/3 w-full sm:max-w-[60%] bg- rounded-lg flex items-center justify-center" type="submit">
                                        <span className="z-30">
                                            Submit
                                        </span>
                                        <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
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