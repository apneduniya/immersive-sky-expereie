import { Input } from "../ui/input";


export function InlinePlaceholderInput({ label, type="text", className="", inputClassName="", name="", value="", onChange=()=>{} }) {
    return (
        <>
            <div className={`flex gap-4 items-center justify-between ${className}`}>
                <Input type={type} id={label} className={`placeholder:text-black !border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent bg-white text-black ${inputClassName}`} placeholder={label} value={value} onChange={onChange} name={name} />
            </div>
        </>
    )
}