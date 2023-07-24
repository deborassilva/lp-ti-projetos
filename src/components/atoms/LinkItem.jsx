export default function LinkItem({text, url}) {
    return(
        <a className="text-[#030303] text-lg font-normal cursor-pointer hover:text-[#0053ff]" 
        href={url}>
        {text}
        </a>
    )
}
