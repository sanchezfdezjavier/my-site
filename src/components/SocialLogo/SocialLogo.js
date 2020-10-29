import React from 'react'
import './SocialLogo.css'

const socialLogo = (props) => {
    return(
        <div>
        <a
          className="App-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={props.logo} className="Social-logo" alt="logo" />
        </a>
            
        </div>
    )
}

export default socialLogo;