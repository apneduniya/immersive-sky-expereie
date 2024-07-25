import { InlineLabelInput, InlineLabelTextarea } from "@/components/common/InlineLabelInput";
import ContextMenu from "@/components/layout/NavContextMenu";
import Image from "next/image";



export default function UploadPage() {
    const randomIndex = Math.floor(Math.random() * 10);

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full bg-img-bg-9 bg-cover bg-center px-5 md:px-20 py-10">
                    {/* Desktop */}
                    <div className="h-full w-full 2xl:flex flex-col items-center gap-10 hidden">
                        {/* Top container */}
                        <div className="w-full flex flex-col items-center gap-8">
                            {/* First container */}
                            <div className="flex w-10/12 justify-between">
                                {/* Left */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between">
                                        <InlineLabelInput label="Disaster" inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Event" inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineLabelInput label="Date" inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Day" inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Time" inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Duration" inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between gap-32">
                                        <InlineLabelInput label="Place" inputClassName="h-6 w-20" />
                                        <InlineLabelInput label="Affected Areas" inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineLabelInput label="Geolocation (Longitude/Latitude)" inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                            </div>
                            {/* Second container */}
                            <div className="flex gap-32 w-11/12 justify-end">
                                <InlineLabelInput label="Device" inputClassName="h-6 w-20" />
                                <InlineLabelInput label="Camera Model" inputClassName="h-6 w-20" />
                            </div>
                        </div>
                        {/* Middle container */}
                        <div className="w-full flex items-center justify-center">
                            {/* Left container */}
                            <div className="w-1/4 flex flex-col -rotate-90">
                                <div className="self-end flex flex-col gap-2">
                                    <InlineLabelInput label="Device" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Camera Model" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Software" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineLabelInput label="Aspect ratio" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Resolution" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineLabelInput label="ISO" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Shutter Speed" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Aperture" inputClassName="h-6 w-20" />
                                </div>
                            </div>
                            <Image src={`https://picsum.photos/500/300?random=${randomIndex}`} alt="upload-image" width={400} height={400} className="w-[900px]" />
                            {/* Right container */}
                            <div className="w-1/4 flex flex-col rotate-90">
                                <div className="self-start flex flex-col gap-2">
                                    <InlineLabelInput label="Photo" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Video" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Audio" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Sound" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineLabelInput label="File Name" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="File Size" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="File Type" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineLabelInput label="Archival" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Document" inputClassName="h-6 w-20" />
                                </div>
                            </div>
                        </div>
                        {/* Bottom container */}
                        <div className="w-full flex flex-col items-center gap-2 px-20">
                            {/* First container */}
                            <div className="flex w-[900px] gap-10 justify-center px-5">
                                <InlineLabelInput label="Title" inputClassName="h-6" className="w-full" />
                                <button className="bg-transparent border-none font-bold italic uppercase">
                                    Upload
                                </button>
                            </div>
                            {/* Second container */}
                            <div className="flex w-full justify-between">
                                {/* Left */}
                                <div className="w-fit flex flex-col gap-2">
                                    <InlineLabelInput label="Name" inputClassName="h-6 w-20" />
                                    <InlineLabelTextarea label="Biography" inputClassName="h-20 w-[200px]" />
                                </div>
                                {/* Middle */}
                                <div className="w-[900px] px-5 flex flex-col gap-5">
                                    <InlineLabelTextarea label="Forcast and Stories" inputClassName="h-20 w-full" />
                                    <InlineLabelInput label="Keywords" inputClassName="h-6 w-full" />
                                </div>
                                {/* Right */}
                                <div className="w-fit flex flex-col items-end gap-2">
                                    <InlineLabelInput label="Image Source" inputClassName="h-6 w-20" />
                                    <InlineLabelInput label="Image Copyright" inputClassName="h-6 w-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Small Screen Laptops, Tablets & Mobiles */}
                    <div className="h-full w-full 2xl:hidden flex flex-col items-center gap-10 px-5 md:px-20 py-5">
                        <Image src={`https://picsum.photos/500/300?random=${randomIndex}`} alt="upload-image" width={400} height={400} className="w-full" />
                        <div className="w-full flex flex-col gap-5">
                            <InlineLabelInput label="Title" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Disaster" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Event" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Date" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Day" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Time" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Duration" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Place" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Affected Areas" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Geolocation (Longitude/Latitude)" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Device" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Camera Model" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Name" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelTextarea label="Biography" inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineLabelTextarea label="Forcast and Stories" inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineLabelInput label="Keywords" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Image Source" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineLabelInput label="Image Copyright" inputClassName="h-8 w-full max-w-[400px]" />
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






