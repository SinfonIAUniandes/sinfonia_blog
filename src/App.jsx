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
          <li><NavLink to="/" className="navlink">Home</NavLink></li>
          <li><NavLink to="/posts" className="navlink">Posts</NavLink></li>
          <li><NavLink to="/articles" className="navlink">Artículos</NavLink></li>
          <li><NavLink to="/about" className="navlink">Sobre</NavLink></li>
          <li><NavLink to="/cosa" className="navlink">Cosa</NavLink></li>
        </ul>
      </nav>
      <main className="main-content h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/cosa" element={<Cosa />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;