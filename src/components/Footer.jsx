import React from "react";
import "./footer.css";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer_container">
      {/* <FaTwitterSquare style={{ width: "30px", height: "30px" }} />*/}
      <a
        href="https://www.facebook.com/viney.viney.1232/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare style={{ width: "30px", height: "30px" }} />
      </a>

      <a
        href="https://www.instagram.com/viney_gautam/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare style={{ width: "30px", height: "30px" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/viney-gautam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin style={{ width: "30px", height: "30px" }} />
      </a>
      <a
        href="https://www.github.com/viney20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare style={{ width: "30px", height: "30px" }} />
      </a>
    </div>
  );
}

export default Footer;
