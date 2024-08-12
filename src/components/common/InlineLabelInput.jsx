import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


export function InlineLabelInput({ label, type = "text", className = "", inputClassName = "", name = "", value = "", onChange = () => { } }) {
    return (
        <>
            <div className={`flex gap-4 items-center justify-between ${className}`}>
                <Label htmlFor={label} className="font-normal">{label}</Label>
                {/* <Input type={type} id={label} className={`!border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent border-none bg-white text-black ${inputClassName}`} value={value} onChange={onChange} name={name} /> */}
                <div className={`relative z-10 h-6 w-20 bg- rounded-lg flex items-center justify-center ${inputClassName}`}>
                    <Input type={type} id={label} value={value} onChange={onChange} name={name} className={`!border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent border-none bg-transparent text-black relative z-30`} />
                    <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                </div>
            </div>
        </>
    )
}


export function InlineLabelTextarea({ label, type = "text", className = "", inputClassName = "", name = "", value = "", onChange = () => { } }) {
    return (
        <>
            <div className={`flex gap-4 justify-between ${className}`}>
                <Label htmlFor={label} className="">{label}</Label>
                {/* <Textarea id={label} className={`!border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent border-none bg-white text-black ${inputClassName}`} name={name} value={value} onChange={onChange} /> */}
                <div className="relative z-10 h-20 w-full bg- rounded-lg flex items-center justify-center">
                    <Textarea id={label} value={value} onChange={onChange} name={name} className={`!border-transparent focus:!border-transparent focus:!ring-0 focus:!ring-transparent border-none bg-transparent text-black ${inputClassName} relative z-30`} />
                    <div className="absolute z-20 h-full w-full rounded-lg blur-sm bg-white opacity-50" />
                </div>
            </div>
        </>
    )
}



