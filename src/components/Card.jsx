import React from "react";
import Pic from "../images/viney.jpeg";
import "./card.css";
import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
function Card() {
  return (
    <div className="container">
      <img src={Pic} alt="viney's picture" />
      <div>
        <div className="tittle_container">
          <span className="name">Viney Gautam</span>
          <span className=" degination">Frontend Developer</span>
          <span>www.viney_gautam.com</span>
        </div>
        <div className="about_Section">
          <button className="btn">
            <MdEmail className="email_icon" />
            Email
          </button>
          <span className="about_title">About</span>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <span className="about_title">Interests</span>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Card;
