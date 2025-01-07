"use client"
import Link from "next/link";
function NavBar() {
    return ( 
        <header>
            <nav>
                <ul className="flex flex-row gap-4 ">
                    <li><Link href="/">Acerca de mí</Link></li>
                    <li><Link href="/fotos">Fotos</Link></li>
                    <li><Link href="/videos">Vídeos</Link></li>
                    <li><Link href="/contacto">Contáctame</Link></li>
                </ul>
            </nav>
        </header>
     );
};

export default NavBar;