import React from "react";
import "../AboutMe/style.css";
import portfoliopic from "../../img/portfoliopic.png";

function AboutMe() {
  return (
    <section className="container col-10" id="about">
    <div className="aboutme">
    <img
    src={portfoliopic}
    width="180"
    height="auto"
    className="float-left d-flex flex-wrap josh"
    alt="Josh B George"
    />
    
    <p>
    <b>Location:</b> Ottawa, Ontario
    </p>
    <p>
    I am a junior web developer currently completing a certificate for Full Stack Web Development from Carleton University in association with Trilogy Coding Bootcamp. I am interested in Web Development and I am eager to put my passion, strengths, and new skills to work for an innovative and dynamic company.
    </p>
    </div>
    </section>
    );
  }
  export default AboutMe;
  