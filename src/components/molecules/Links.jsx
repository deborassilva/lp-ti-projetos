import LinkItem from "../atoms/LinkItem";

export default function Links() {
    const pathname = window.location.href
    const links = [
        {
            texto: 'Our rates',
            url: `${pathname}/#rates`
        },
        
        {
            texto: 'Favorite projects',
            url: `${pathname}/#projects`
        },
        
        {
            texto: 'Reviews',
            url: `${pathname}/#reviews`
        },

        {
            texto: 'Contact',
            url: `${pathname}/#contact`
        }
    ]

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