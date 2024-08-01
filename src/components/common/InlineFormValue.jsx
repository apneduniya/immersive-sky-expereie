


export default function InlineFormValue({ label, value="--", className="", valueClassName="" }) {
    return (
        <>
            <div className={`flex gap-4 items-center justify-between ${className}`}>
                <span className="font-bold">{label}:</span>
                <span id={label} className={`text-black ${valueClassName}`}>{value}</span>
            </div>
        </>
    )
}


