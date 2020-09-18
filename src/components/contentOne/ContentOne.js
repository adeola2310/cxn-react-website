import React from "react";
import "./ContentOne.css"
import Button from "../button/button";

const ContentOne = (props) => {
    return (
        <div className="contents">
            <h4 className="contents-header">{props.header}</h4>
            <p>{props.title}</p>
            <p>{props.fee}</p>
            <br/>
            <br/>
            <input type="number" className="stake" placeholder="Amount of CXN to stake"/>
            <br/>
            <br/>
            <Button name="unstake"/>
            <br/>
            <br/>
            <Button name="max"/>
        </div>
    )
}

export default ContentOne