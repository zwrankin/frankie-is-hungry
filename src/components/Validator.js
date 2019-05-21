import React from 'react';

function EmptyResponse(props) {
    const text = "FEED ME \n RIGHT MEOW!"
    return <p className="frankie" style={{color: "red" }}> {text} </p>
}

function FishResponse(props) {
    return <div className="frankie" style={{color: "green" }}> Yummmmm! </div>
}

function NotFishResponse(props) {
    const text = `I WANT FISH \n NOT ${props.query.toUpperCase()}`
    return (
        <div>
            <img className="img__query"
                src={`http://loremflickr.com/600/400/${props.query.toLowerCase()}`}
                alt={`${props.query.toLowerCase()}`}/>
            <div className="frankie">{text}</div>
        </div>
    )
}

function Validator(props) {
    if (props.query.toLowerCase() === "fish") {
        return ( < FishResponse / > )
    }
    else if (props.query === "") {
        return ( < EmptyResponse / > )
    }
    else {
        return ( < NotFishResponse query = {props.query}/ > )
    }
}


export default Validator;
