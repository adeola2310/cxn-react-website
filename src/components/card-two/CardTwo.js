import React from "react";
import './CardTwo.css';
const CardTwo =(props)=>{
    return(
        <div className="card-two">
            <div className="card-details">
                <h3 className="heading"><b> {props.title}</b>

                </h3>
                <p className="result">{props.value}</p>
            </div>
        </div>
    )
}

export default CardTwo