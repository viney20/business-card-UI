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
      <FaTwitterSquare style={{ width: "30px", height: "30px" }} />
      <FaFacebookSquare style={{ width: "30px", height: "30px" }} />
      <FaInstagramSquare style={{ width: "30px", height: "30px" }} />
      <FaLinkedin style={{ width: "30px", height: "30px" }} />
      <FaGithubSquare style={{ width: "30px", height: "30px" }} />
    </div>
  );
}

export default Footer;
