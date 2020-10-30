import logo from './images/LogoWhite.png';
import linkedinLogo from './images/linkedinlogo.png'
import './App.css';
import GithubLogo from './images/github.png'
import ResumeLogo from './images/document.png'
import Avatar from './images/avatar_b_low.jpg'
import SocialWrapper from './components/SocialWrapper'

// uninstall FontAwesome
import { FaRegFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
	<div className="main container-fluid justify-content-center">
		<img src={logo} className="My-logo slide-in-elliptic-bottom-bck" alt="mylogo" />
		<h1 className="">Javier Sánchez Fernández</h1>
		<p>I'm a computer science student based in Madrid, Spain</p>
		<p>sanchezfdezjavier@gmail.com | +34 667217167</p>
		<i class="fas fa-camera"></i>
		<div className="row">
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