"use client";

import ContextMenu from "@/components/layout/NavContextMenu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ImageDetailsPage() {
    const [details] = useState({
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc ultricies nunc.",
        disaster: "Earthquake",
        year: "2024",
        place: "USA",
        longitude: "23.456",
        latitude: "-103.892",
        day: "Tuesday",
        date: "2023-12-12",
        time: "12:00 PM",
        fileName: "demo.jpg",
        fileSize: "2.3 MB",
        fileType: "JPEG",
        archival: "Archival",
        dimensions: "1920x1080",
        cameraModel: "Canon EOS 5D Mark IV",
        exposureTime: "2.5s",
        iso: "ISO 100",
        focalLength: "50mm"
    });

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full bg-img-bg-8 bg-cover bg-center px-5 md:px-20 py-5">
                    {/* Header */}
                    <Link href="/image-archive">
                        <div className="w-full flex justify-end">
                            <div className="h-10 w-10 border-2 border-black rounded-full flex items-center justify-center overflow-hidden cursor-pointer">
                                {/* <Image src={"https://static.vecteezy.com/system/resources/previews/005/545/335/large_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"} height={320} width={320} alt="User avatar" /> */}
                                <span className="text-black font-bold text-xl">x</span>
                            </div>
                        </div>
                    </Link>
                    {/* Main container */}
                    <div>
                        <h2 className="mt-5 lg:text-3xl text-2xl font-bold">
                            Image Details
                        </h2>
                        <div className="mt-12 flex justify-between xl:flex-row flex-col items-center xl:items-start gap-10">
                            {/* Image */}
                            <div className="xl:max-w-[40%] xl:w-fit w-full flex flex-col">
                                <Image src={"https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={500} width={500} alt="User upload" className="rounded-xl h-72 object-cover flex-shrink-0 self-center" />
                                <div className="grid w-full gap-1.5 mt-10">
                                    <p>
                                        {details.description}
                                    </p>
                                </div>
                            </div>
                            {/* Image details form */}
                            <div className="xl:max-w-[50%] w-full">
                                <div className="w-full flex justify-between flex-col sm:flex-row gap-5">
                                    <p className="lg:max-w-[30%] text-center w-full">{details.disaster}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.year}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.place}</p>
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <p className="lg:max-w-[30%] text-center w-full">{details.longitude}° longitude</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.latitude}° latitude</p>
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <p className="lg:max-w-[30%] text-center w-full">{details.day}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.date}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.time}</p>
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <p className="lg:max-w-[30%] text-center w-full">{details.fileName}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.fileSize}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.fileType}</p>
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <p className="lg:max-w-[30%] text-center w-full">{details.archival}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.dimensions}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.cameraModel}</p>
                                </div>
                                <div className="w-full flex justify-between mt-5 flex-col sm:flex-row gap-5">
                                    <p className="lg:max-w-[30%] text-center w-full">{details.exposureTime}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.iso}</p>
                                    <p className="lg:max-w-[30%] text-center w-full">{details.focalLength}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </ContextMenu>
        </>
    );
}
