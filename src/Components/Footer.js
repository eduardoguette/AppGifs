import React from "react";
import "./Footer.css"
import logoTwitter from "../icon-twitter.png"
import logoInstagram from "../icon-instagram.png"
import logoGit from "../github-brands.png"

export default function Footer() {
  return (
    <div className="footer">
      <p>Hecho por Eduardo Guette </p>
      <div className="socialLogos">
        <a target="_blanck" href="https://twitter.com/eduardoguette" className="social" >
          <img src={logoTwitter} alt="twitter" />
        </a>
        <a target="_blanck" href="https://instagram.com/eduardoguette" className="social" >
          <img src={logoInstagram} alt="instagram" />
        </a>
        <a target="_blanck" href="https://github.com/eduardoguette" className="social" >
          <img src={logoGit} alt="git" />
        </a>
      </div>
    </div>
  )
}