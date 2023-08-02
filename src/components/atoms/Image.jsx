export default function Image(props){
    return (
        <img className={`
         ${props.type === 'rounded' && 'rounded-full'}
         ${props.size === 'small' && 'h-36 w-36'}
         ${props.size === 'medium' && 'h-80 w-96'}
         ${props.size === 'big' && 'h-[460px] w-{500px]'}
        
        `}
        src={props.src}
        alt={props.alt}

        />
    )
}