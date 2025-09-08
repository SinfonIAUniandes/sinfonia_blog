// src/Posts.jsx
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

// 1. Usar import.meta.glob de Vite para encontrar todos los archivos .md
//    y cargarlos como texto sin formato de forma inmediata (eager: true).
const markdownModules = import.meta.glob("../content/posts/*.md", {
  as: "raw",
  eager: true,
});

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 2. Mapear el objeto de módulos a un array de posts
    const loadedPosts = Object.entries(markdownModules).map(
      ([path, content]) => ({
        path,
        content,
      })
    );
    setPosts(loadedPosts);
  }, []);

  // 3. Renderizar cada post dentro de su propio componente ReactMarkdown
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contenido de /content/posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <article key={index} className="glass prose p-6 mb-6 shadow-md">
            <h3 className="text-lg font-semibold !mt-0">
              Desde: <code>{post.path}</code>
            </h3>
            <hr className="my-2" />
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        ))
      ) : (
        <p>No se encontraron posts en Markdown.</p>
      )}
    </div>
  );
}