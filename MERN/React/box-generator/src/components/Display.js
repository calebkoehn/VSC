import React from "react";

const Display = (props) => {
    const { boxColor } = props;
    return (
        <div>
            {
                boxColor.map((box, index) => (
                    <div key={index} style={{display: "inline-block", margin: "10px", height: box.hSize, width: box.wSize, backgroundColor: box.color}}></div>
                ))
            }
        </div>
    );
}

export default Display;