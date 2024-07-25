import InlineFormValue from "@/components/common/InlineFormValue";
import ContextMenu from "@/components/layout/NavContextMenu";
import Image from "next/image";
import Link from "next/link";
import crossIcon from "@/assets/icons/cross.svg";



export default function ImageDetailsPage() {
    const randomIndex = Math.floor(Math.random() * 10);

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full bg-img-bg-9 bg-cover bg-center px-5 md:px-20 py-10">
                    {/* Header */}
                    <Link href="/image-archive">
                        <div className="w-full flex justify-end">
                            <div className="h-10 w-10 border-2 border-black rounded-full flex items-center justify-center overflow-hidden cursor-pointer">
                                <Image src={crossIcon} alt="cross-icon" width={24} height={24} />
                            </div>
                        </div>
                    </Link>
                    {/* Desktop */}
                    <div className="h-full w-full 2xl:flex flex-col items-center gap-10 hidden">
                        {/* Top container */}
                        <div className="w-full flex flex-col items-center gap-8">
                            {/* First container */}
                            <div className="flex w-10/12 justify-between">
                                {/* Left */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between">
                                        <InlineFormValue label="Disaster" inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Event" inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineFormValue label="Date" inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Day" inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Time" inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Duration" inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-fit flex flex-col gap-5">
                                    <div className="flex justify-between gap-32">
                                        <InlineFormValue label="Place" inputClassName="h-6 w-20" />
                                        <InlineFormValue label="Affected Areas" inputClassName="h-6 w-20" />
                                    </div>
                                    <div className="flex gap-3">
                                        <InlineFormValue label="Geolocation (Longitude/Latitude)" inputClassName="h-6 w-20" />
                                    </div>
                                </div>
                            </div>
                            {/* Second container */}
                            <div className="flex gap-32 w-11/12 justify-end">
                                <InlineFormValue label="Device" inputClassName="h-6 w-20" />
                                <InlineFormValue label="Camera Model" inputClassName="h-6 w-20" />
                            </div>
                        </div>
                        {/* Middle container */}
                        <div className="w-full flex items-center justify-center">
                            {/* Left container */}
                            <div className="w-1/4 flex flex-col -rotate-90">
                                <div className="self-end flex flex-col gap-2">
                                    <InlineFormValue label="Device" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Camera Model" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Software" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineFormValue label="Aspect ratio" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Resolution" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineFormValue label="ISO" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Shutter Speed" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Aperture" inputClassName="h-6 w-20" />
                                </div>
                            </div>
                            <Image src={`https://picsum.photos/500/300?random=${randomIndex}`} alt="upload-image" width={400} height={400} className="w-[900px]" />
                            {/* Right container */}
                            <div className="w-1/4 flex flex-col rotate-90">
                                <div className="self-start flex flex-col gap-2">
                                    <InlineFormValue label="Photo" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Video" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Audio" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Sound" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-end flex flex-col gap-2">
                                    <InlineFormValue label="File Name" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="File Size" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="File Type" inputClassName="h-6 w-20" />
                                </div>
                                <div className="self-start flex flex-col gap-2">
                                    <InlineFormValue label="Archival" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Document" inputClassName="h-6 w-20" />
                                </div>
                            </div>
                        </div>
                        {/* Bottom container */}
                        <div className="w-full flex flex-col items-center gap-2 px-20">
                            {/* First container */}
                            <div className="flex w-[900px] gap-10 justify-center px-5">
                                <InlineFormValue label="Title" inputClassName="h-6" className="w-full" />
                                <button className="bg-transparent border-none font-bold italic uppercase">
                                    Upload
                                </button>
                            </div>
                            {/* Second container */}
                            <div className="flex w-full justify-between">
                                {/* Left */}
                                <div className="w-fit flex flex-col gap-2">
                                    <InlineFormValue label="Name" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Biography" inputClassName="h-20 w-[200px]" />
                                </div>
                                {/* Middle */}
                                <div className="w-[900px] px-5 flex flex-col gap-5">
                                    <InlineFormValue label="Forcast and Stories" inputClassName="h-20 w-full" />
                                    <InlineFormValue label="Keywords" inputClassName="h-6 w-full" />
                                </div>
                                {/* Right */}
                                <div className="w-fit flex flex-col items-end gap-2">
                                    <InlineFormValue label="Image Source" inputClassName="h-6 w-20" />
                                    <InlineFormValue label="Image Copyright" inputClassName="h-6 w-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Small Screen Laptops, Tablets & Mobiles */}
                    <div className="h-full w-full 2xl:hidden flex flex-col items-center gap-10 px-5 md:px-20 py-5">
                        <Image src={`https://picsum.photos/500/300?random=${randomIndex}`} alt="upload-image" width={400} height={400} className="w-full" />
                        <div className="w-full flex flex-col gap-5">
                            <InlineFormValue label="Title" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Disaster" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Event" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Date" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Day" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Time" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Duration" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Place" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Affected Areas" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Geolocation (Longitude/Latitude)" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Device" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Camera Model" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Name" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Biography" inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineFormValue label="Forcast and Stories" inputClassName="h-20 w-full max-w-[400px]" />
                            <InlineFormValue label="Keywords" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Image Source" inputClassName="h-8 w-full max-w-[400px]" />
                            <InlineFormValue label="Image Copyright" inputClassName="h-8 w-full max-w-[400px]" />
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






