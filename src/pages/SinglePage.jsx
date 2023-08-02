
import Header from "../components/organisms/Header";
import Hero from "../components/organisms/Hero";

export default function SinglePage() {
    return(
        <>
        <Header />
        <main className="px-16 py-12">
            <Hero />
        </main>
        </>
    )
}