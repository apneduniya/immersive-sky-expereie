import { SearchIcon } from "lucide-react";
import { InlinePlaceholderInput } from "./InlinePlaceholderInput";



export function SearchImageArchive({ data = {}, handleChange = () => { }, handleSubmit = () => { } }) {
    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full"> {/* Wrapper container */}
                <div className="h-full w-full flex items-center justify-center flex-col xl:flex-row">
                    <InlinePlaceholderInput label="Disaster" name="disaster" value={data.disaster} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Device" name="device" value={data.device} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Model No" name="modelNo" value={data.modelNo} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    <button className="h-8 w-32 rounded-none bg-white relative z-[99999] border border-gray-400 flex items-center justify-center" onClick={handleSubmit}>
                        <SearchIcon size={16} />
                    </button>
                    <div className="flex flex-col">
                        <InlinePlaceholderInput label="Photo" name="photo" value={data.photo} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Sudio" name="audio" value={data.audio} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Video" name="video" value={data.video} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Search" name="search" value={data.search} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Archival" name="archival" value={data.archival} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Document" name="document" value={data.document} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                        <InlinePlaceholderInput label="Portfolio" name="portfolio" value={data.portfolio} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    </div>
                    <InlinePlaceholderInput label="Event" name="event" value={data.event} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Place" name="place" value={data.place} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Date" name="date" value={data.date} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                    <InlinePlaceholderInput label="Day" name="day" value={data.day} onChange={handleChange} inputClassName="h-8 w-32 rounded-none border-gray-400 text-center relative z-[99999]" />
                </div>
            </div>
        </>
    )
}



