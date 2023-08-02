export default function Button(props) {
    return(
        <button
            className={`

                ${props.color === `green` && `bg-green-500 border-green-400 text-black`} 
                ${props.color === `blue` && `bg-blue-700 border-blue-700 text-white`}
                ${props.type === `rounded` && `h-9 w-9 rounded-full border border-gray-400 text-black`}
                ${props.type === `default` && `px-8 py-5 rounded-full border border-gray-400 text-black`}
                uppercase
                text-base
                max-w-fit

                `}
             
        >
            {props.title}
        </button>
    )
}