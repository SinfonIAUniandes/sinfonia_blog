import { Routes, Route, NavLink } from "react-router-dom";


import "@google/model-viewer"; // registra el web-component
import "./App.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Cosa from "./Cosa";

function App() {
  return (
    <div className="app-container">
      <nav className="glass sidebar p-4 shadow-md h-full">
        <ul>
          <li><NavLink to="/sinfonia_blog" className="navlink">Home</NavLink></li>
          <li><NavLink to="/sinfonia_blog/posts" className="navlink">Posts</NavLink></li>
          <li><NavLink to="/sinfonia_blog/articles" className="navlink">Artículos</NavLink></li>
          <li><NavLink to="/sinfonia_blog/about" className="navlink">Sobre</NavLink></li>
          <li><NavLink to="/sinfonia_blog/cosa" className="navlink">Cosa</NavLink></li>
        </ul>
      </nav>
      <main className="main-content h-full">
        <Routes>
          <Route path="/sinfonia_blog" element={<Home />} />
          <Route path="/sinfonia_blog/about" element={<About />} />
          <Route path="/sinfonia_blog/posts" element={<Posts />} />
          <Route path="/sinfonia_blog/articles" element={<Articles />} />
          <Route path="/sinfonia_blog/cosa" element={<Cosa />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;