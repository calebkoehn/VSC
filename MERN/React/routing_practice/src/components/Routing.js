import React from 'react';

const Routing = (props) => {

    const {numOrWord, fontColor, backgroundColor} = props;



    return (
        <div>
            {
            (!numOrWord)
                ? <h1>Welcome!</h1>
                :(!isNaN(numOrWord))
                    ? <h1>The Number is: {numOrWord}</h1>
                    : (fontColor || backgroundColor)
                        ? <h1 style={{color: fontColor, backgroundColor: backgroundColor}}>The Word is: {numOrWord}</h1>
                        : <h1>The Word is: {numOrWord}</h1>
            }
        </div>
    )
}

export default Routing;