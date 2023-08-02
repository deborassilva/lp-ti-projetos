export default function Title(props) {
    return (
        <>
        {
            props.type === 'primary' &&
            <h1
              className={`
              text-[#030303]
              text-6xl
              font-normal
          
          `}
        >

          {props.children}
        </h1>

        }
        
        {
            props.type === 'secondary' &&
            <h2
              className={`
              text-[#030303]
              text-6xl
              font-normal
          
          `}
        >

          {props.children}
        </h2>

        }
        
        </>
        
    )
}