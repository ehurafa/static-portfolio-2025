import { NavLink } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

export default function Sidebar(){
  return (
    <div>
      <div className="avatar"><img src={ profileImg } alt="Profile photo" /></div>
      <h1>Rafael<strong>Gomes</strong></h1>
      <span className="role">Front-end Developer</span>
      <div className="social">
        <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
        <a href="https://www.pinterest.com" aria-label="Pinterest" target="_blank" rel="noreferrer">p</a>
        <a href="#" aria-label="Dribbble">◎</a>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Inicial</NavLink>
        <NavLink to="/certificados">Certificados</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </div>
  );
}