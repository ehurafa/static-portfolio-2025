import { NavLink } from "react-router-dom"
import profileImg from "../assets/profile.jpg"
import { TiSocialLinkedin } from "react-icons/ti"
import { BiLogoPinterestAlt } from "react-icons/bi"
import { FaGithubAlt } from "react-icons/fa6"

export default function Sidebar(){
  return (
    <div>
      <div className="avatar"><img src={ profileImg } alt="Profile photo" /></div>
      <h1>Rafael<strong>Gomes</strong></h1>
      <span className="role">Front-end Developer</span>
      <div className="social">
        <a href="https://www.linkedin.com/in/rflrafa/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <span>
            <TiSocialLinkedin />
          </span>
        </a>
        <a href="https://br.pinterest.com/ehurafa/jobs" aria-label="Pinterest" target="_blank" rel="noreferrer">
          <span>
            <BiLogoPinterestAlt />
          </span>
        </a>
        <a href="https://github.com/ehurafa" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <span>
            <FaGithubAlt />
          </span>
        </a>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Inicial</NavLink>
        <NavLink to="/certificados">Certificados</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </div>
  );
}