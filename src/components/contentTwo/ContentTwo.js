import React from "react";
import Button from "../button/button";
import './ContentTwo.css'


const ContentTwo = (props)=>{
    return(
        <div className="contents">
            <h4 className="contents-header">{props.header}</h4>
            <p>{props.title}</p>
            <p>{props.fee}</p>
            <br/>
            <br/>
            <Button name="Withdraw"/>
            <br/>
            <br/>
            <Button name="Invest"/>
        </div>
    )
}

export default ContentTwo