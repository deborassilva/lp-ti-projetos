import TitleHero from "../molecules/TitleHero";
import Image from "../atoms/Image"
import imgHero from "../../assets/images/img-site.png"

export default function Hero(){
    return (
        <section className="flex justify-between items-center" >
            <TitleHero />
            <Image src={imgHero} size="big" />
        </section>
    )
}