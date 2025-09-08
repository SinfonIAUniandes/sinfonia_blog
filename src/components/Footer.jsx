import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-10">
      <div className="container">
        <div className="row">
          {/* Sección de enlaces */}
          <div className="col-md-6">
            <h2 className="h4 mb-4">Conéctate con nosotros</h2>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/SinfonIAUniandes"
                className="btn btn-outline-light align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.instagram.com/sinfonia_uniandes/"
                className="btn btn-outline-light align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>

          {/* Sección de derechos y créditos */}
          <div className="col-md-6 text-md-end mt-4 mt-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} SinfonIA
            </p>
            <p className="mb-0">Esta página es administrada por el equipo web de SinfonIA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}