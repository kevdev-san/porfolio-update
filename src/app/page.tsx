'use client'

import CoverParticles from "../../components/cover-particles";
import TypewriterEfecto from "../../components/type-writer";
import Carrusel from "../../components/carruseltecno";
import Navbar from "../../components/navbar";
import Proyectos from "../../components/proyectos";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-[100vh] bg-gradient-to-b from-black via-blue-950 overflow-hidden text-white">
      {/* Navbar fijo arriba */}
      <Navbar />
      {/* Partículas de fondo */}
      <CoverParticles />

      {/* Hero */}
      <section id="inicio" className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center py-32">
        <h1 className="text-6xl md:text-7xl font-mono font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-400 to-purple-500 drop-shadow-lg">
          KDev
        </h1>
        <span className="text-2xl md:text-3xl font-mono flex justify-center items-center gap-2">
          Desarrollador{" "}
          <span className="text-green-400 drop-shadow-[0_0_10px_#00FF41]">
            <TypewriterEfecto />
          </span>
        </span>

      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-32 px-4 text-whi">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-mono">Sobre mí</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Soy <span className="text-green-400 font-semibold">Kevin</span>, desarrollador <span className="text-blue-400 font-semibold">Fullstack</span> apasionado por la creación de <span className="text-purple-400 font-semibold">aplicaciones web modernas</span>.
            Me gusta aprender nuevas tecnologías y siempre busco mejorar la experiencia de usuario en cada proyecto.
          </p>
        </div>
      </section>

      <Proyectos />

      {/* Tecnologías / Carrusel */}
      <section id="tecnologias" className="py-24 px-4 text-white">
        <h2 className="text-4xl font-bold text-center font-mono mb-10">Tecnologías</h2>
        <Carrusel />
      </section>

      {/* Certificados */}
      <section id="certificados" className="py-24 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-mono">Certificados</h2>
          <p className="mb-6 text-lg md:text-xl">
            Puedes ver todos mis certificados en la siguiente página:
          </p>
          <a
            href="https://kevdev-san.github.io/pagcertificados"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-sky-400 text-black font-bold rounded-lg hover:scale-105 hover:shadow-lg transition transform"
          >
            Ver certificados
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-4 text-white ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-mono">Contacto</h2>
          <p className="mb-6 text-lg md:text-xl">
            Si quieres contactarme, puedes escribirme a: <br />
            <a href="mailto:kbanossanchez@gmail.com" className="text-green-400 hover:underline">kbanossanchez@gmail.com</a>
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/kevdev-san" target="_blank" className="text-green-400 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/kevin-leonardo-baños-sanchez-2a33881a6" target="_blank" className="text-green-400 hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>

    </div>
  );
}
