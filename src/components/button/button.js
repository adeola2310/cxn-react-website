import React from "react";
import './button.css'

const Button =(props)=>{
    return(
       <div className="btn">
<p>{props.name}</p>
       </div>
    )
}

export default Button;