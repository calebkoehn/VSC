import React,{ useState } from "react";

const Form = (props) => {
    const {boxColor, setboxColor} = props;
    const [ color, setColor] = useState("");
    const [ size, setHSize, setWSize] = useState(200);

    const submitHandler = (event) => {
        event.preventDefault();
        setboxColor([...boxColor, {color: color, hSize: size + "px", wSize: size + "px",}]);
        setColor("");
        setHSize(200);
        setWSize(200);
    }
    
    return (
    <div className="container text-center col-6">
        <form onSubmit={ submitHandler }>
            <div className="form-group">
                <label htmlFor="Color" className="h6 mt-3">Color:</label>
                <input type="text" className="form-control" name="color" value={color} onChange={ (e) => setColor(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Height" className="h6 mt-3">Height in Pixels: </label>
                <input type="text" name="size" className="form-control" value={size} onChange={ (e) => setHSize(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Width" className="h6 mt-3">Width in Pixels: </label>
                <input type="text" name="size" className="form-control" value={size} onChange={ (e) => setWSize(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-3 mb-5">Add Color</button>
        </form>
    </div>
    )
    
}


export default Form;