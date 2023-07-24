import Logo from '../atoms/Logo'
import Links from '../molecules/Links'

export default function Header() {
    return (
        <header className="px-12 py-6 flex justify-between border-b-2 border-[#d9dbe0] ">
             <Logo />
             <Links />

        </header>
    )

}