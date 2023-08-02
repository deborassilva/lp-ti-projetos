export default function Text({ children, className}) {
    return(
        <p
            className={`
            ${className ? className : ''}
            text-[#030303] text-lg
            `}>
            
            {children}
        </p>
    )
}