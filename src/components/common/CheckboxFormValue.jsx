import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";


export function CheckboxFormValue({ label, className="", checkboxClassName="", value=false }) {
    return (
        <>
            <div className={`flex gap-4 items-center justify-between ${className}`}>
                <Label htmlFor={label} className="text-sm font-medium leading-none">{label}</Label>
                <Checkbox id={label} className={`cursor-default ${checkboxClassName}`} checked={value}/>
            </div>
        </>
    )
}