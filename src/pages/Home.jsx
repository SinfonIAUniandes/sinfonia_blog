import React from "react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {/* Columna 1: Título y descripción */}
      <section className="glass p-6 shadow-md col-span-2">
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
      <section className="glass p-4 shadow-md col-span-1">
        <h2 className="text-xl font-medium mb-3">Nuestro robot (3D)</h2>
        <model-viewer
          src="/models/Pepper.glb"
          alt="Robot SinfonIA"
          auto-rotate
          exposure="1"
          rotation-per-second="100deg"
          style={{ width: "100%", height: "320px", borderRadius: 12 }}
        >
          {/* Fallback */}
        </model-viewer>
        <p className="mt-3 text-sm text-muted">
          Usa el ratón o touch para rotar. (glTF/glb servido desde `public/models/`)
        </p>
      </section>

      {/* Sección de fotos */}
      <section className="glass p-6 col-span-3 grid md:grid-cols-2 gap-4">
        <h2 className="text-2xl font-semibold mb-4 col-span-full">Galería</h2>
        {/* Reemplaza estas imágenes con las tuyas en la carpeta public/images */}
        <img src="https://via.placeholder.com/400x250.png?text=Foto+1" alt="Descripción de la foto 1" className="rounded-lg shadow-md" />
        <img src="https://via.placeholder.com/400x250.png?text=Foto+2" alt="Descripción de la foto 2" className="rounded-lg shadow-md" />
      </section>
    </main>
  );
}
