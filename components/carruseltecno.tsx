'use client'

import { FaReact } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiDjango,
    SiJavascript,
    SiGit,
    SiGithub
} from "react-icons/si";

export default function CarruselContinuo() {
    // Guardamos referencias a los componentes y su color
    const tecnologias = [
        { id: 'react', icon: FaReact, color: 'text-sky-500' },
        { id: 'next', icon: SiNextdotjs, color: 'text-black' },
        { id: 'tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
        { id: 'node', icon: SiNodedotjs, color: 'text-green-600' },
        { id: 'postgres', icon: SiPostgresql, color: 'text-blue-700' },
        { id: 'python', icon: SiPython, color: 'text-blue-600' },
        { id: 'django', icon: SiDjango, color: 'text-green-800' },
        { id: 'javascript', icon: SiJavascript, color: 'text-yellow-400' },
        { id: 'git', icon: SiGit, color: 'text-orange-600' },
        { id: 'github', icon: SiGithub, color: 'text-black' },
    ];

    // Duplicamos los íconos varias veces para el efecto de carrusel continuo
    const carouselItems = [...tecnologias, ...tecnologias, ...tecnologias];

    return (
        <section className="px-10 py-10 overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {carouselItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={`${item.id}-${index}`} // Key único
                                className="flex-none w-32 flex justify-center items-center"
                            >
                                <IconComponent className={`${item.color} text-7xl`} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    display: flex;
                    gap: 2.5rem;
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </section>
    );
}
