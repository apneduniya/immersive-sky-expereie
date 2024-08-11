import { SearchIcon } from "lucide-react";
import { InlinePlaceholderInput } from "./InlinePlaceholderInput";



export function SearchImageArchive({ data = {}, handleChange = () => { }, handleSubmit = () => { } }) {
    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full"> {/* Wrapper container */}
                <div className="h-full w-full flex items-center justify-center flex-col xl:flex-row">
                    {/* <InlinePlaceholderInput label="Disaster" name="disaster" value={data.disaster} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Device" name="device" value={data.device} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Model No" name="modelNo" value={data.modelNo} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" /> */}
                    <button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("disaster")}>
                        <span className="text-sm">Disaster</span>
                    </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("device")}>
                        <span className="text-sm">Device</span>
                    </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("modelNo")}>
                        <span className="text-sm">Model No</span>
                    </button>
                    <button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("search")}>
                        <SearchIcon size={16} />
                    </button>
                    <div className="flex flex-col">
                        {/* <InlinePlaceholderInput label="Photo" name="photo" value={data.photo} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Audio" name="audio" value={data.audio} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Video" name="video" value={data.video} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Search" name="search" value={data.search} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Archival" name="archival" value={data.archival} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Document" name="document" value={data.document} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Portfolio" name="portfolio" value={data.portfolio} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" /> */}
                        <button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("photo")}>
                            <span className="text-sm">Photo</span>
                        </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("audio")}>
                            <span className="text-sm">Audio</span>
                        </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("video")}>
                            <span className="text-sm">Video</span>
                        </button>
                        
                        <InlinePlaceholderInput label="Search" name="search" value={data.search} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                        
                        <button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("archival")}>
                            <span className="text-sm">Archival</span>
                        </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("document")}>
                            <span className="text-sm">Document</span>
                        </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("portfolio")}>
                            <span className="text-sm">Portfolio</span>
                        </button>
                    </div>
                    {/* <InlinePlaceholderInput label="Event" name="event" value={data.event} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Place" name="place" value={data.place} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Date" name="date" value={data.date} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Day" name="day" value={data.day} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-none text-center relative z-[99999]" /> */}
                    <button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("event")}>
                        <span className="text-sm">Event</span>
                    </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("place")}>
                        <span className="text-sm">Place</span>
                    </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("date")}>
                        <span className="text-sm">Date</span>
                    </button><button className="h-8 w-32 rounded-none bg-white relative z-[99999] border-none flex items-center justify-center" onClick={() => handleSubmit("day")}>
                        <span className="text-sm">Day</span>
                    </button>
                </div>
            </div>
        </>
    )
}



