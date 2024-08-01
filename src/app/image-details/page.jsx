"use client"

import InlineFormValue from "@/components/common/InlineFormValue";
import ContextMenu from "@/components/layout/NavContextMenu";
import Image from "next/image";
import Link from "next/link";
import crossIcon from "@/assets/icons/cross.svg";
import { getAsset, getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from "@/utils/updateBGImg";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import defaultImg from "@/assets/images/default_img.jpg";


function ImageDetailsPage() {
    const randomIndex = Math.floor(Math.random() * 10);
    const searchParams = useSearchParams();
    const [data, setData] = useState({
        title: '--',
        disaster: '--',
        event: '--',
        date: '--',
        day: '--',
        time: '--',
        duration: '--',
        place: '--',
        affectedAreas: '--',
        geolocation: '--',
        device: '--',
        cameraModel: '--',
        name: '--',
        biography: '--',
        forecastAndStories: '--',
        keywords: '--',
        imageSource: '--',
        imageCopyright: '--',
        software: '--',
        aspectRatio: '--',
        resolution: '--',
        iso: '--',
        shutterSpeed: '--',
        aperture: '--',
        photo: '--',
        video: '--',
        audio: '--',
        sound: '--',
        fileName: '--',
        fileSize: '--',
        fileType: '--',
        archival: '--',
        document: '--',
        user_id: '--',
        src: defaultImg,
        created_at: "--",
    });

    const id = searchParams.get('id');

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await getAsset(id);
                return response.data;
            } catch (error) {
                console.error("Failed to fetch scatter asset", error);
                return [];
            }
        }

        fetchImages().then((data) => {
            setData(data);
        });
    }, [id]);

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
                <main className="main px-5 md:px-20 py-10 flex">
                    {/* Header */}
                    <div className="absolute top-7 right-10">
                        <Link href="/image-archive">
                            <div className="w-full flex justify-end">
                                <div className="h-14 w-14 flex items-center justify-center overflow-hidden cursor-pointer">
                                    <Image src={crossIcon} alt="cross-icon" width={36} height={36} />
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* Desktop */}
                    <div className="h-full w-full xl:flex flex-col items-center gap-10 hidden self-center">
                        {/* Top container */}
                        <div className="w-full flex flex-col items-center gap-8">
                            {/* First container */}
                            <div className="flex w-10/12 justify-between">
                                {/* Left */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between">
                                        <InlineFormValue label="Disaster" value={data.disaster} inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Event" value={data.event} inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineFormValue label="Date" value={data.date} inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Day" value={data.day} inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Time" value={data.time} inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Duration" value={data.duration} inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between gap-32">
                                        <InlineFormValue label="Place" value={data.place} inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Affected Areas" value={data.affectedAreas} inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineFormValue label="Geolocation (Longitude/Latitude)" value={data.geolocation} inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                            </div>
                            {/* Second container */}
                            <div className="flex gap-32 w-11/12 justify-end">
                                <InlineFormValue label="Device" value={data.device} inputClassName="h-6 w-20" />
                                <InlineFormValue label="Camera Model" value={data.cameraModel} inputClassName="h-6 w-20" />
                            </div>
                        </div>
                        {/* Middle container */}
                        <div className="w-full flex items-center justify-center">
                            {/* Left container */}
                            <div className="w-1/4 flex flex-col -rotate-90">
                                <div className="self-end flex flex-col gap-2">
                                    <InlineFormValue label="Device" value={data.device} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Camera Model" value={data.cameraModel} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Software" value={data.software} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineFormValue label="Aspect ratio" value={data.aspectRatio} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Resolution" value={data.resolution} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineFormValue label="ISO" value={data.iso} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Shutter Speed" value={data.shutterSpeed} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Aperture" value={data.aperture} inputClassName="h-6 w-20" />
                                </div>
                            </div>
                            <Image src={data.src} alt="upload-image" width={400} height={400} className="w-[700px]" />
                            {/* Right container */}
                            <div className="w-1/4 flex flex-col rotate-90">
                                <div className="self-start flex flex-col gap-2">
                                    <InlineFormValue label="Photo" value={data.photo} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Video" value={data.video} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Audio" value={data.audio} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Sound" value={data.sound} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineFormValue label="File Name" value={data.fileName} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="File Size" value={data.fileSize} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="File Type" value={data.fileType} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineFormValue label="Archival" value={data.archival} inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Document" value={data.document} inputClassName="h-6 w-20" />
                                </div>
                            </div>
                        </div>
                        {/* Bottom container */}
                        <div className="flex w-full justify-between">
                            {/* Left */}
                            <div className="mt-12 w-fit flex flex-col gap-2">
                                <InlineFormValue label="Name" value={data.name} inputClassName="h-6 w-20" />
                                <InlineFormValue label="Biography" value={data.biography} inputClassName="h-20 w-[200px]" />
                            </div>
                            {/* Middle */}
                            <div className="w-[700px] px-10 flex flex-col gap-5 items-center">
                                {/* First container */}
                                <div className="flex w-full gap-10 justify-center">
                                    <InlineFormValue label="Title" value={data.title} inputClassName="h-6" className="w-full" />
                                </div>
                                {/* Second container */}
                                <div className="w-full flex flex-col gap-5">
                                    <InlineFormValue label="Forcast and Stories" value={data.forecastAndStories} inputClassName="h-20 w-full" />
                                    <InlineFormValue label="Keywords" value={data.keywords} inputClassName="h-6 w-full" />
                                </div>
                            </div>
                            {/* Right */}
                            <div className="mt-12 w-fit flex flex-col items-end gap-2">
                                <InlineFormValue label="Image Source" value={data.imageSource} inputClassName="h-6 w-20" />
                                <InlineFormValue label="Image Copyright" value={data.imageCopyright} inputClassName="h-6 w-20" />
                            </div>
                        </div>
                    </div>
                    {/* Small Screen Laptops, Tablets & Mobiles */}
                    <div className="h-full w-full xl:hidden flex flex-col items-center gap-10 px-5 md:px-20 py-5 mt-10">
                        <Image src={data.src} alt="upload-image" width={400} height={400} className="w-full" />
                        <div className="w-full flex flex-col gap-5">
                            <InlineFormValue label="Title" value={data.title} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Disaster" value={data.disaster} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Event" value={data.event} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Date" value={data.date} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Day" value={data.day} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Time" value={data.time} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Duration" value={data.duration} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Place" value={data.place} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Affected Areas" value={data.affectedAreas} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Geolocation (Longitude/Latitude)" value={data.geolocation} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Device" value={data.device} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Camera Model" value={data.cameraModel} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Name" value={data.name} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Biography" value={data.biography} inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineFormValue label="Forcast and Stories" value={data.forecastAndStories} inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineFormValue label="Keywords" value={data.keywords} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Image Source" value={data.imageSource} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Image Copyright" value={data.imageCopyright} inputClassName="h-8 w-full max-w-[400px]" />
                            <button className="bg-transparent border-none font-bold italic uppercase">
                                Upload
                            </button>
                        </div>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}



export default function SuspendedImageDetailsPage() {
    return (
        <Suspense>
            <ImageDetailsPage />
        </Suspense>
    );
}
