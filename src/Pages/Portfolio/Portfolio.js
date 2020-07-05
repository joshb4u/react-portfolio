import React from "react";
import Skillset from "../../components/Skillset/skillset"
import Cards from "../../components/Cards/cards";
import "./style.css";


function Portfolio() {
    return (
        <section className="container col-10">
        <div className="portfolio">
        <Skillset />
        <Cards />
        </div>
        </section>
        );
    }
    export default Portfolio;