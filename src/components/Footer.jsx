import React from 'react'
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <figure className="footer__img--wrapper">
        <img src={logo} alt="Site Logo" className="footer__img" />
      </figure>

      <h1 className="footer__copyright">Copyright &#169; 2023 TMDB</h1>
    </footer>
  )
}

export default Footer