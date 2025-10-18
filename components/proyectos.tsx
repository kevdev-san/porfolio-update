"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiTailwindcss, SiDjango, SiShadcnui, SiPostgresql } from "react-icons/si";

const proyectos = [
    {
        id: 1,
        titulo: "Sistema de Gestión de Empleados",
        descripcion: "Aplicación web para administrar empleados con Next.js y Tailwind.",
        link: "https://github.com/kevdev-san/Gestor-X",
        img: "/img/proyecto1.png",
        tecnologias: [
            { nombre: "Next.js", icon: <SiNextdotjs /> },
            { nombre: "TailwindCSS", icon: <SiTailwindcss /> },
        ],
    },
    {
        id: 2,
        titulo: "App de gastos",
        descripcion: "Aplicación web para el registro de gastos con Next.js y Python Django.",
        link: "https://front-expense-app.vercel.app",
        img: "/img/proyecto2.png",
        tecnologias: [
            { nombre: "Next.js", icon: <SiNextdotjs /> },
            { nombre: "Django", icon: <SiDjango /> },
            { nombre: "TailwindCSS", icon: <SiTailwindcss /> },
            { nombre: "Shadcn", icon: <SiShadcnui/>},
            { nombre: "PostgreSQL", icon: <SiPostgresql/>}
        ],
    },
];

// Variantes para animación de entrada en cascada
const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Generador de partículas (corregido)
const Particulas = () => {
    const [particles, setParticles] = useState<
        { x: number; y: number; tx: number; ty: number; duration: number }[]
    >([]);

    useEffect(() => {
        const arr = Array.from({ length: 6 }, () => ({
            x: Math.random() * 250,
            y: Math.random() * 250,
            tx: Math.random() * 250,
            ty: Math.random() * 250,
            duration: 6 + Math.random() * 4,
        }));
        setParticles(arr);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-green-400 opacity-30"
                    initial={{ x: p.x, y: p.y }}
                    animate={{ x: p.tx, y: p.ty }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default function Proyectos() {
    return (
        <section id="proyectos" className="py-24 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center font-mono">
                    Proyectos
                </h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {proyectos.map((proyecto) => (
                        <motion.div
                            key={proyecto.id}
                            variants={item}
                            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="relative bg-gray-900 rounded-lg shadow-lg flex flex-col justify-between overflow-hidden"
                        >
                            {/* Imagen */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={proyecto.img}
                                    alt={proyecto.titulo}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-t-lg"
                                />
                            </div>

                            {/* Partículas */}
                            <Particulas />

                            <div className="relative z-10 p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        {proyecto.titulo}
                                    </h3>
                                    <p className="mb-4">{proyecto.descripcion}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {proyecto.tecnologias.map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                className="flex items-center gap-2 bg-gray-800 text-green-300 text-sm px-3 py-1 rounded-full border border-green-400"
                                            >
                                                {tech.icon} {tech.nombre}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <motion.a
                                    href={proyecto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 inline-block bg-green-400 px-4 py-2 rounded-lg text-black font-semibold text-center"
                                >
                                    Ver
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
