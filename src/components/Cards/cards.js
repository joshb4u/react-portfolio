import React, { Component } from "react";
import "./style.css";
import apps from "../../data/apps.js";
import Card from "../Card/card";


class Cards extends Component {    
  
  render(){
    return (
      <div className="justify-items-center" id="card-holder">
      <h5>My Work</h5>
      <div className="card-deck">
      {apps.map(function(app, index){
        return (
          <Card app={app} />
          );
        })}
        </div>
        </div>
        );
      } 
    }
    
    
    export default Cards;