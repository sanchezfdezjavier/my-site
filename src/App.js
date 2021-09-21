import logo from './images/LogoWhite.png';
import './App.css';
import SocialWrapper from './components/SocialWrapper'

import { FaRegFileAlt, FaGithub, FaLinkedin, FaMapPin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { IconContext } from "react-icons"

function App() {
  return (
	<div className="main container-fluid justify-content-center">
		<div className="">
			<img src={logo} className="My-logo slide-in-bck-center slide-in-elliptic-bottom-bck" alt="mylogo" />
		</div>
		<h1 className="slide-in-elliptic-bottom-bck">Javier Sánchez Fernández</h1>
		<p className="slide-in-elliptic-bottom-bck">I'm a new grad working as a Software Engineer at <a className="a-link" href="https://canonical.com/">Canonical</a> (the makers of Ubuntu)</p>
		<p className="slide-in-elliptic-bottom-bck">
		<div className="email-location-container">
			<IconContext.Provider value={{ color: "white", size: "1.5em", className: "global-class-name" }}>
				<FiMail/> sanchezfdezjavier@gmail.com
			</IconContext.Provider>
			
			<IconContext.Provider value={{ color: "white", size: "1.5em", className: "global-class-name" }}>
				<FaMapPin/> Dublin, Ireland
			</IconContext.Provider>
		</div>
		</p>
		<i className="fas fa-camera"></i>
		<div className="row slide-in-elliptic-bottom-bck">
			<div className="col-xs-1 icon">
				<SocialWrapper link="https://github.com/sanchezfdezjavier"><FaGithub/></SocialWrapper>
			</div>
			<div className="col-xs-1 icon">
				<SocialWrapper link="https://www.linkedin.com/in/sanchezfdezjavier"><FaLinkedin/></SocialWrapper>
			</div>
			<div className="col-xs-1 icon">
				<SocialWrapper link="https://docs.google.com/document/d/1yjZM0yORhAmvz0hcGOjrZ4MK1KgP68buQTprcvOTkzM/edit?usp=sharing"><FaRegFileAlt/></SocialWrapper>
			</div>
		</div>
	</div>
  );
}

export default App;

