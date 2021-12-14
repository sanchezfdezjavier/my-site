import logo from "./images/LogoWhite.png";
import "./App.css";

import SocialWrapper from "./components/SocialWrapper/SocialWrapper";
import CoolButton from "./components/CoolButton/CoolButton";
import CoolButton2 from "./components/CoolButton2/CoolButton2";
import MainTitle from "./components/MainTitle/MainTitle";
import AboutMe from "./components/AboutMe/AboutMe";

import { FaRegFileAlt, FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { IconContext } from "react-icons";

import { githubURL, linkedinURL, resumeURL } from "./constants";

function App() {
  return (
    <div className="main container-fluid justify-content-center">
      {/* LOGO */}
      <div className="slide-in-elliptic-bottom-bck">
        <img src={logo} className="My-logo" alt="mylogo" />
      </div>

      <div className="container justify-content-center text-align-center">
        {/* MAIN TITLE */}
        <MainTitle>Javier Sánchez</MainTitle>

        {/* ABOUT ME */}
        <AboutMe />
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
            <TiDocumentText />
          </SocialWrapper>
        </div>
      </div>
      <CoolButton className="align-items-center">📩 Contact me!</CoolButton>
    </div>
  );
}

export default App;
