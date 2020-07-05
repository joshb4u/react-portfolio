import React, { Component } from "react";
import "./style.css";
import tech from "../../data/tech.js";
import Skill from "../Skills/skills";


class Skillset extends Component {    
  render(){
    return (
      <div className="skill-set">
      <h5>Skills</h5>
      <div className="container-flex row my-skills">
      {tech.map(function(app, index){
        return (
          <Skill app={app} />
          );
        })}
        </div>
        </div>
        );
      } 
    }
    
    export default Skillset;