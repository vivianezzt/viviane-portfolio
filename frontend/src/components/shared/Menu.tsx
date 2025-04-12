"use client";

import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"


export default function Menu() {
    const caminho = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}>Início</MenuItem>
            <MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>
            <Link
                href="http://localhost:4000/contato"
                target="_blank"
                className="flex items-center gap-2 text-sm border-green-400 hover:text-white text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
                <FaWhatsapp className="text-[#25D366] text-lg" />
                Contato
            </Link>
        </nav>

    )
}
function MenuItem(props: {
    href: string,
    children: React.ReactNode,
    selecionado?: boolean,
    novaAba?: boolean,
  }) {
    return (
      <Link 
        href={props.href} 
        target={props.novaAba ? "_blank" : "_self"}
        className={`
          flex items-center gap-2 text-sm border-green-400
          hover:text-white ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}
          transition-all duration-300 hover:-translate-y-1 hover:scale-105
        `}
      >
        {props.children}
      </Link>
    );
  }
  