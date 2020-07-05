import React from "react";
import "./style.css";

function Card(props) {
    const app = props.app;
    return(
        <div className="card">
        <img src= {app.image} className="card-img-top" alt={app.name} />
        <div className="card-body">
        <h5 className="card-title">{app.name}</h5>
        <p className="card-text">{app.description}</p>
        <button type="button" className="btn btn-light btn-sm"><a href={app.links.githubUrl}>GITHUB</a></button>
        <button type="button" className="btn btn-light btn-sm"><a href={app.links.demoUrl}>LIVE</a></button>
        </div>
        </div>
        )
    }
    
    export default Card;
    