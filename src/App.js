import logo from './images/LogoWhite.png';
import './App.css';
import SocialWrapper from './components/SocialWrapper'

// uninstall FontAwesome
import { FaRegFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { IconContext } from "react-icons"

function App() {
  return (
	<div className="main container-fluid justify-content-center">
		<img src={logo} className="My-logo slide-in-bck-center slide-in-elliptic-bottom-bck" alt="mylogo" />
		<h1 className="slide-in-elliptic-bottom-bck">Javier Sánchez Fernández</h1>
		<p className="slide-in-elliptic-bottom-bck">I'm a computer science student based in Madrid, Spain</p>
		<p className="slide-in-elliptic-bottom-bck">
		<IconContext.Provider value={{ color: "white", size: "1.5em", className: "global-class-name" }}>
			<FiMail/> sanchezfdezjavier@gmail.com
		</IconContext.Provider>
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
				<SocialWrapper link="https://drive.google.com/file/d/1iu7sR_N5Y3gOYDN9y2d5-LtCw8gaqUlz/view?usp=sharing"><FaRegFileAlt/></SocialWrapper>
			</div>
		</div>
	</div>
  );
}

export default App;