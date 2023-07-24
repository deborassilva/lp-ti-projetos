import LinkItem from "../atoms/LinkItem";

export default function Links({links}) {
    

    return(
        <div className="flex gap-8 max-w-fit">
          {
            links.map((link, index) => {
                return (
                  <LinkItem key={index} text={link.texto} url={link.url} />
                );
            })
          }


        </div>
    )
}