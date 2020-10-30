import React from 'react'
import { IconContext } from "react-icons"

const socialWrapper = (props) =>{
    return (
        <IconContext.Provider value={{ color: "white", size: "2em", className: "global-class-name" }}>
        <div className="button">
            <a
            href={props.link}   
            target="_blank"
            rel="noopener noreferrer"
            >
                {props.children}
            </a>
        </div>
        </IconContext.Provider>
    )
}

export default socialWrapper;