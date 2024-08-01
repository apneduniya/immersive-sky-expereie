"use client"

import { InlineLabelInput, InlineLabelTextarea } from "@/components/common/InlineLabelInput";
import ContextMenu from "@/components/layout/NavContextMenu";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getUser } from "@/utils/api/auth";
import { saveAsset } from "@/utils/api/asset";
import defaultImg from "@/assets/images/default_img.jpg";
import { uploadImageToImgBB } from "@/utils/save_img";
import { getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from '@/utils/updateBGImg';

export default function UploadPage() {
    const randomIndex = Math.floor(Math.random() * 10);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);


    const [formData, setFormData] = useState({
        title: 'test',
        disaster: 'test',
        event: 'test',
        date: 'test',
        day: 'test',
        time: 'test',
        duration: 'test',
        place: 'test',
        affectedAreas: 'test',
        geolocation: 'test',
        device: 'test',
        cameraModel: 'test',
        name: 'test',
        biography: 'test',
        forecastAndStories: 'test',
        keywords: 'test',
        imageSource: 'test',
        imageCopyright: 'test',
        software: 'test',
        aspectRatio: 'test',
        resolution: 'test',
        iso: 'test',
        shutterSpeed: 'test',
        aperture: 'test',
        photo: 'test',
        video: 'test',
        audio: 'test',
        sound: 'test',
        fileName: 'test',
        fileSize: 'test',
        fileType: 'test',
        archival: 'test',
        document: 'test'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const base64Image = e.target.result;
                console.log("Base64 Image:", base64Image);
                const response = await uploadImageToImgBB(base64Image.split(',')[1]);
                console.log("Response from ImgBB:", response);
                const url = response.data.url;

                await handleSubmit(url);
            }
            reader.readAsDataURL(file);
        });
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (url) => {
        const data = {
            ...formData,
            src: url
        };

        // console.log("Data to be saved:", data);

        const response = await saveAsset(data);
        if (response.success) {
            console.log("Asset saved successfully");
        } else {
            alert("Error saving asset");
        }
    }

    useEffect(() => {
        const checkUserStatus = async () => {
            try {
                const data = await getUser();
                if (data.success) {
                    setIsUserLoggedIn(true);
                } else {
                    setIsUserLoggedIn(false);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setIsUserLoggedIn(false);
            }
        };

        checkUserStatus();
    }, []);

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

        // Set up an interval to fetch every second
        const intervalId = setInterval(fetchURL, process.env.NEXT_PUBLIC_LATEST_IMG_FETCH_TIME); // 1000 milliseconds = 1 second

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <ContextMenu>
                <main className="main max-w-dvw px-5 md:px-20 py-10 flex">
                    {/* Desktop */}
                    <div className="h-full w-full xl:flex flex-col items-center gap-5 hidden self-center">
                        {/* Top container */}
                        <div className="w-full flex flex-col items-center gap-8">
                            {/* First container */}
                            <div className="flex w-10/12 justify-between">
                                {/* Left */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between">
                                        <InlineLabelInput label="Disaster" name="disaster" value={formData.disaster} onChange={handleChange} inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Event" name="event" value={formData.event} onChange={handleChange} inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineLabelInput label="Date" name="date" value={formData.date} onChange={handleChange} inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Day" name="day" value={formData.day} onChange={handleChange} inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Time" name="time" value={formData.time} onChange={handleChange} inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Duration" name="duration" value={formData.duration} onChange={handleChange} inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between gap-32">
                                        <InlineLabelInput label="Place" name="place" value={formData.place} onChange={handleChange} inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Affected Areas" name="affectedAreas" value={formData.affectedAreas} onChange={handleChange} inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineLabelInput label="Geolocation (Longitude/Latitude)" name="geolocation" value={formData.geolocation} onChange={handleChange} inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                            </div>
                            {/* Second container */}
                            <div className="flex gap-32 w-11/12 justify-end">
                                <InlineLabelInput label="Device" name="device" value={formData.device} onChange={handleChange} inputClassName="h-6 w-20" />
                                <InlineLabelInput label="Camera Model" name="cameraModel" value={formData.cameraModel} onChange={handleChange} inputClassName="h-6 w-20" />
                            </div>
                        </div>
                        {/* Middle container */}
                        <div className="w-full flex items-center justify-center mt-3">
                            {/* Left container */}
                            <div className="w-1/4 flex flex-col -rotate-90">
                                <div className="self-end flex flex-col gap-2">
                                    <InlineLabelInput label="Device" name="device" value={formData.device} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Camera Model" name="cameraModel" value={formData.cameraModel} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Software" name="software" value={formData.software} onChange={handleChange} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineLabelInput label="Aspect ratio" name="aspectRatio" value={formData.aspectRatio} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Resolution" name="resolution" value={formData.resolution} onChange={handleChange} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineLabelInput label="ISO" name="iso" value={formData.iso} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Shutter Speed" name="shutterSpeed" value={formData.shutterSpeed} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Aperture" name="aperture" value={formData.aperture} onChange={handleChange} inputClassName="h-6 w-20" />
                                </div>
                            </div>
                            <div className="flex items-end">
                                <Image src={defaultImg} alt="upload-image" width={400} height={400} className="w-[700px]" />
                                <button className="bg-transparent border-none font-bold italic uppercase -rotate-90 mb-5">
                                    Delete
                                </button>
                            </div>
                            {/* Right container */}
                            <div className="w-1/4 flex flex-col rotate-90">
                                <div className="self-start flex flex-col gap-2">
                                    <InlineLabelInput label="Photo" name="photo" value={formData.photo} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Video" name="video" value={formData.video} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Audio" name="audio" value={formData.audio} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Sound" name="sound" value={formData.sound} onChange={handleChange} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineLabelInput label="File Name" name="fileName" value={formData.fileName} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="File Size" name="fileSize" value={formData.fileSize} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="File Type" name="fileType" value={formData.fileType} onChange={handleChange} inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineLabelInput label="Archival" name="archival" value={formData.archival} onChange={handleChange} inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Document" name="document" value={formData.document} onChange={handleChange} inputClassName="h-6 w-20" />
                                </div>
                            </div>
                        </div>
                        {/* Bottom container */}
                        <div className="flex w-full justify-between">
                            {/* Left */}
                            {
                                isUserLoggedIn ?
                                    <div className="mt-12 w-fit flex flex-col gap-2">
                                        <InlineLabelInput label="Name" name="name" value={formData.name} onChange={handleChange} inputClassName="h-6 w-20" />
                                        <InlineLabelTextarea label="Biography" name="biography" value={formData.biography} onChange={handleChange} inputClassName="h-20 w-[200px]" />
                                    </div>
                                    :
                                    <div className="w-[283px]"></div>
                            }
                            {/* Middle */}
                            <div className="w-[750px] -ml-36 px-10 flex flex-col gap-5 items-center">
                                {/* First container */}
                                <div className="flex w-full gap-10 justify-center">
                                    <InlineLabelInput label="Title" name="title" value={formData.title} onChange={handleChange} inputClassName="h-6" className="w-full" />
                                    <button className="bg-transparent border-none font-bold italic uppercase" onClick={handleUploadClick}>
                                        Upload
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        multiple
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                {/* Second container */}
                                <div className="w-full flex flex-col gap-5">
                                    <InlineLabelTextarea label="Forcast and Stories" name="forecastAndStories" value={formData.forecastAndStories} onChange={handleChange} inputClassName="h-20 w-full" />
                                    <InlineLabelInput label="Keywords" name="keywords" value={formData.keywords} onChange={handleChange} inputClassName="h-6 w-full" />
                                </div>
                            </div>
                            {/* Right */}
                            <div className="mt-12 w-fit flex flex-col items-end gap-2">
                                <InlineLabelInput label="Image Source" name="imageSource" value={formData.imageSource} onChange={handleChange} inputClassName="h-6 w-20" />
                                <InlineLabelInput label="Image Copyright" name="imageCopyright" value={formData.imageCopyright} onChange={handleChange} inputClassName="h-6 w-20" />
                            </div>
                        </div>
                    </div>
                    {/* Small Screen Laptops, Tablets & Mobiles */}
                    <div className="h-full w-full xl:hidden flex flex-col items-center gap-10 px-5 md:px-20 py-5">
                        <Image src={`https://picsum.photos/500/300?random=${randomIndex}`} alt="upload-image" width={400} height={400} className="w-full" />
                        <div className="w-full flex flex-col gap-5">
                            <InlineLabelInput label="Title" name="title" value={formData.title} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Disaster" name="disaster" value={formData.disaster} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Event" name="event" value={formData.event} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Date" name="date" value={formData.date} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Day" name="day" value={formData.day} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Time" name="time" value={formData.time} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Duration" name="duration" value={formData.duration} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Place" name="place" value={formData.place} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Affected Areas" name="affectedAreas" value={formData.affectedAreas} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Geolocation (Longitude/Latitude)" name="geolocation" value={formData.geolocation} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Device" name="device" value={formData.device} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Camera Model" name="cameraModel" value={formData.cameraModel} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            {
                                isUserLoggedIn &&
                                <>
                                    <InlineLabelInput label="Name" name="name" value={formData.name} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                                    <InlineLabelTextarea label="Biography" name="biography" value={formData.biography} onChange={handleChange} inputClassName="h-20 w-full max-w-[400px]" />
                                </>
                            }
                            <InlineLabelTextarea label="Forcast and Stories" name="forecastAndStories" value={formData.forecastAndStories} onChange={handleChange} inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineLabelInput label="Keywords" name="keywords" value={formData.keywords} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Image Source" name="imageSource" value={formData.imageSource} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Image Copyright" name="imageCopyright" value={formData.imageCopyright} onChange={handleChange} inputClassName="h-8 w-full max-w-[400px]" />
                            <button className="bg-transparent border-none font-bold italic uppercase">
                                Upload
                            </button>
                        </div>
                    </div>
                </main>
            </ContextMenu>
        </>
    );
}
