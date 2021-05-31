import React from "react";
import "./Box.css";

function Box({id, width, height, color, removeBox}){

    const divStyle = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`
    }

    return (
        <div className="Box" key={id} style={divStyle}>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    );
};

export default Box;