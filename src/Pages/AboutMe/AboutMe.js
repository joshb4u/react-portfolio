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
    I am pursuing my Master's degree in Computer Science at Carleton University (Graduation Date: Feb 25, 2022). I am actively seeking a full-time job to kick-start my career. My area of interest is Wireless Networks, Cyber Security, Machine Learning, Data Science, and Web Development. I also have an Electrical Engineering degree. With my proven social skills, team experience, technical skills, and a strong desire to learn, I believe I can be a valuable asset to any team. I am also fully vaccinated against Covid-19 as per Canadian regulations.
    </p>
    </div>
    </section>
    );
  }
  export default AboutMe;
  