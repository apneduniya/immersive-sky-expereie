import { Input } from "../ui/input";


export function InlinePlaceholderInput({ label, type="text", className="", inputClassName="", name="", value="", onChange=()=>{} }) {
    return (
        <>
            <div className={`flex gap-4 items-center justify-between ${className}`}>
                <Input type={type} id={label} className={`placeholder:text-black border-[1.99px] bg-white text-black ${inputClassName}`} placeholder={label} value={value} onChange={onChange} name={name} />
            </div>
        </>
    )
}