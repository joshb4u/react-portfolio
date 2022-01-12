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
    I am completing my Masters in Computer Science at Carleton University (Graduation Date: Feb 25, 2022). I am interested in Machine Learning & Web Development. I currently have skills in HTML, CSS, Bootstrap, Javascript, jQuery, Semantic UI, Node JS, APIs etc. I am eager to put my passion, strengths, and new skills to work for an innovative and dynamic company. I also have an Electrical Engineering degree. With proven social skills, team experience, tech skills and the strongest desire to learn, I can be a technically flexible and great addition to any team.
    </p>
    </div>
    </section>
    );
  }
  export default AboutMe;
  