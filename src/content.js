import React from "react";


export default function Content(props){
    return(
        <div className="content">
            <h1 className="content-header">{props.title}</h1>
            <p className="content-descriptaion">{props.matan}</p>
        </div>
    )
}