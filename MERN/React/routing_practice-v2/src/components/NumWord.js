import { useParams } from "react-router-dom";

const NumWord = (props) => {
    const { param, fontColor, backgroundColor } = useParams();
    
    return(
        <div>
            {
                isNaN(param)
                ? <h1 style={{color: fontColor, backgroundColor: backgroundColor}}>The Word is: {param}</h1>
                : <h1 style={{color: fontColor, backgroundColor: backgroundColor}}>The Number is: {param}</h1>
            }
        </div>
    )

}  

export default NumWord;

