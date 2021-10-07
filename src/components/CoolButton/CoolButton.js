import React from 'react'

import './CoolButton.css'

export default function CoolButton(props) {
    return (
        <div className="container">
            <a href={props.url} className="chip">{props.children}</a>
        </div>
    )
}
