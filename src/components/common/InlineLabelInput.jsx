import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


export function InlineLabelInput({ label, type="text", className="", inputClassName="", name="", value="", onChange=()=>{} }) {
    return (
        <>
            <div className={`flex gap-4 items-center justify-between ${className}`}>
                <Label htmlFor={label} className="">{label}</Label>
                <Input type={type} id={label} className={`border-none bg-white text-black ${inputClassName}`} value={value} onChange={onChange} name={name} />
            </div>
        </>
    )
}


export function InlineLabelTextarea({ label, type="text", className="", inputClassName="", name="", value="", onChange=()=>{} }) {
    return (
        <>
            <div className={`flex gap-4 justify-between ${className}`}>
                <Label htmlFor={label} className="">{label}</Label>
                <Textarea id={label} className={`border-none bg-white text-black ${inputClassName}`} name={name} value={value} onChange={onChange} />
            </div>
        </>
    )
}



