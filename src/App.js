import logo from "./images/LogoWhite.png";
import "./App.css";
import SocialWrapper from "./components/SocialWrapper";

import { FaRegFileAlt, FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";

import { githubURL, linkedinURL, resumeURL } from "./constants";

function App() {
  return (
    <div className="main container-fluid justify-content-center">
      {/* LOGO */}
      <div className="slide-in-elliptic-bottom-bck">
        <img src={logo} className="My-logo" alt="mylogo" />
      </div>

      <div className="container justify-content-start">
        {/* MAIN TITLE */}
        <h1 className="">Javier Sánchez Fernández</h1>

        {/* ABOUT ME */}
        <p className="text-center">
          I'm a new grad working as a Software Engineer at{" "}
          <a className="a-link" href="https://canonical.com/">
            Canonical
          </a>{" "}
          (the makers of Ubuntu)
        </p>
      </div>

      {/* EMAIL AND LOCATION */}
      <div className="email-location-container">
        <div className="row justify-content-center">
          <div className="mr-5">
            <IconContext.Provider
              value={{
                color: "white",
                size: "1.5em",
                className: "global-class-name",
              }}
            >
              <FaMapPin /> Dublin, Ireland
            </IconContext.Provider>
          </div>
          <div className="">
            <IconContext.Provider
              value={{
                color: "white",
                size: "1.5em",
                className: "global-class-name",
              }}
            >
              <FiMail /> sanchezfdezjavier@gmail.com
            </IconContext.Provider>
          </div>
        </div>
      </div>

      {/* SOCIAL NETWORKS */}
      <div className="row ">
        <div className="col-xs-1 icon">
          <SocialWrapper link={githubURL}>
            <FaGithub />
          </SocialWrapper>
        </div>
        <div className="col-xs-1 icon">
          <SocialWrapper link={linkedinURL}>
            <FaLinkedin />
          </SocialWrapper>
        </div>
        <div className="col-xs-1 icon">
          <SocialWrapper link={resumeURL}>
            <FaRegFileAlt />
          </SocialWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
