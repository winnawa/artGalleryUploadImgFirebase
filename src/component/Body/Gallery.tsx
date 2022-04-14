import React, { FC } from "react";

const Gallery:FC<{arDisplay: string[]}> = (props)=>{

    return (
        <React.Fragment>
        {props.arDisplay.map(  (element)=>{
            return <img src={element}></img>}
        )}
        </React.Fragment>
    );
}

export default Gallery;