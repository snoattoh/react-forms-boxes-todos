import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import {v4 as uuid } from "uuid";

function BoxList(){
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        let newBox = { ...box, id: uuid()};
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = id => {
        setBoxes(boxes.filter(b => b.id !== id));
    };

    const renderBoxes = () => {
        return(
            <ul>
                {boxes.map(box => (
                    <Box id={box.id} color={box.color} width={box.width} height={box.height} removeBox={removeBox} />
                ))}
            </ul>

        );
    };



    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>

    );
};

export default BoxList;
