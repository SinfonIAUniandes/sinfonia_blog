import { Routes, Route, NavLink } from "react-router-dom";


import "@google/model-viewer"; // registra el web-component
import "./App.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Articles from "./pages/Articles";
import About from "./pages/About";

function App() {
  const videoPath = `${import.meta.env.BASE_URL}videos/background-video.mp4`;

  return (
    <>
      <div className="video-background">
        <video src={videoPath} autoPlay loop muted />
      </div>
      <div className="app-container">
        <nav className="glass-navbar sidebar p-4 shadow-md">
          <ul>
            <li><NavLink to="/sinfonia_blog/" className="navlink">Home</NavLink></li>
            <li><NavLink to="/sinfonia_blog/posts/" className="navlink">Posts</NavLink></li>
            <li><NavLink to="/sinfonia_blog/articles/" className="navlink">Artículos</NavLink></li>
            <li><NavLink to="/sinfonia_blog/about/" className="navlink">Sobre</NavLink></li>
          </ul>
        </nav>
        <main className="main-content h-full">
          <Routes>
            <Route path="/sinfonia_blog/" element={<Home />} />
            <Route path="/sinfonia_blog/about/" element={<About />} />
            <Route path="/sinfonia_blog/posts/" element={<Posts />} />
            <Route path="/sinfonia_blog/articles/" element={<Articles />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;