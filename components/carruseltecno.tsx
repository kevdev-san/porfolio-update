'use client'

import { FaReact } from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiPython, SiDjango, SiJavascript, SiGit, SiGithub
} from "react-icons/si";

export default function CarruselContinuo() {
    const tecnologias = [
        <FaReact className="text-sky-500 text-7xl" />,
        <SiNextdotjs className="text-black text-7xl" />,
        <SiTailwindcss className="text-teal-400 text-7xl" />,
        <SiNodedotjs className="text-green-600 text-7xl" />,
        <SiPostgresql className="text-blue-700 text-7xl" />,
        <SiPython className="text-blue-600 text-7xl" />,
        <SiDjango className="text-green-800 text-7xl" />,
        <SiJavascript className="text-yellow-400 text-7xl" />,
        <SiGit className="text-orange-600 text-7xl" />,
        <SiGithub className="text-black text-7xl" />,
    ];

    // Duplicamos los íconos varias veces para que no haya cortes
    const carouselItems = [...tecnologias, ...tecnologias, ...tecnologias];

    return (
        <section className="px-10 py-10 overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {carouselItems.map((icon, index) => (
                        <div key={index} className="flex-none w-32 flex justify-center items-center">
                            {icon}
                        </div>
                    ))}
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
