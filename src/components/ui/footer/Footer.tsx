import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="flex w-full justify-center text-center text-xs mb-10">
            <Link href="/" className="mx-3">
                <span className={`${titleFont.className} antialiased font-bold`}>ChocoBesos </span>
                <span>| Florería y regalos </span>
                <span>© {new Date().getFullYear()}</span>
            </Link>

            <Link href='/'
                className="mx-3"
            >
                Privacidad & legal
            </Link>

            <Link href='/'
                className="mx-3"
            >
                Ubicaciones
            </Link>

            <Link href='/'
                className="mx-3 font-sem"
            >
                powered by @devcer
            </Link>
        </div>
    )
}
