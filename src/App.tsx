import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import Sidebar from "./components/Sidebar";

export default function App(){
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificados" element={<Certificates />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
        <div className="footer">© {new Date().getFullYear()} Seu Nome — Portfólio</div>
      </main>
    </div>
  );
}