import React from "react";
import './card.css';
const Card =(props)=>{
    return(
        <div className="card">
            <div className="card-details">
                <div className="head">
                    <i className="fa fa-cog"></i>
                    <h3 className="heading"><b> {props.title}</b>

                    </h3>
                </div>

                <p className="result">{props.value}</p>
            </div>
        </div>
    )
}

export default Card