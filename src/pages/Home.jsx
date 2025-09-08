import React from "react";

export default function Home() {
  const modelPath = `${import.meta.env.BASE_URL}models/Pepper.glb`;

  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center gap-6 p-4">
      {/* Columna 1: Título y descripción */}
      <section className="glass p-6 shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-slate-800">Bienvenido a SinfonIA</h2>
        <p className="mb-4 text-slate-600">
          SinfonIA es un espacio donde exploramos la intersección entre la inteligencia artificial, la música, el arte y la tecnología. Nuestro objetivo es divulgar conocimiento, experimentar con nuevas herramientas y crear una comunidad de apasionados por la creatividad computacional.
        </p>
        <p className="mb-6 text-slate-600">
          Aquí encontrarás desde tutoriales técnicos y análisis de modelos de IA hasta artículos de opinión y proyectos artísticos.
        </p>
        <button className="cta-button">Explorar Posts</button>
      </section>

      {/* Columna 2: 3D model */}
      <section className="glass shadow-md p-4 flex flex-col items-center">
        <h2 className="text-xl font-medium mb-3">Pepper!</h2>
        <model-viewer
          src={modelPath}
          alt="Robot SinfonIA"
          auto-rotate
          exposure="1"
          rotation-per-second="100deg"
          style={{ width: "320px", height: "320px" }}
        >
        </model-viewer>
      </section>
      <br className="col-span-3" />

      {/* Sección de fotos */}
      <section className="glass p-6 grid md:grid-cols-2 gap-4">
        <h2 className="text-2xl font-semibold mb-4 col-span-full">Galería</h2>
        {/* Reemplaza estas imágenes con las tuyas en la carpeta public/images */}
        <img src="https://via.placeholder.com/400x250.png?text=Foto+1" alt="Descripción de la foto 1" className="rounded-lg shadow-md" />
        <img src="https://via.placeholder.com/400x250.png?text=Foto+2" alt="Descripción de la foto 2" className="rounded-lg shadow-md" />
      </section>
    </main>
  );
}
