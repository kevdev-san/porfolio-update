'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    // Detecta cuando se hace scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scroll ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">KDev</div>

                {/* Links */}
                <ul className="hidden md:flex gap-8 text-white font-medium">
                    <li>
                        <Link href="#inicio" className="hover:text-green-400 transition-colors">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="#sobre-mi" className="hover:text-green-400 transition-colors">
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link href="#proyectos" className="hover:text-green-400 transition-colors">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="#tecnologias" className="hover:text-green-400 transition-colors">
                            Tecnologías
                        </Link>
                    </li>
                    <li>
                        <Link href="#certificados" className="hover:text-green-400 transition-colors">
                            Certificados
                        </Link>
                    </li>
                    <li>
                        <Link href="#contacto" className="hover:text-green-400 transition-colors">
                            Contacto
                        </Link>
                    </li>
                </ul>

                {/* Menú móvil */}
                <MobileMenu />
            </div>
        </nav>
    );
}

// Componente para menú móvil
function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-white text-2xl">
                {open ? "✖" : "☰"}
            </button>

            {open && (
                <ul className="absolute right-0 mt-2 w-48 bg-black/70 backdrop-blur-md rounded-lg shadow-lg py-4 flex flex-col gap-4 text-center text-white font-medium">
                    <li>
                        <Link href="#inicio" onClick={() => setOpen(false)}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="#sobre-mi" onClick={() => setOpen(false)}>
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link href="#proyectos" onClick={() => setOpen(false)}>
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="#tecnologias" onClick={() => setOpen(false)}>
                            Tecnologías
                        </Link>
                    </li>
                    <li>
                        <Link href="#certificados" onClick={() => setOpen(false)}>
                            Certificados
                        </Link>
                    </li>
                    <li>
                        <Link href="#contacto" onClick={() => setOpen(false)}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
