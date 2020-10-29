import logo from './images/logoCircleBlack.png';
import linkedinLogo from './images/linkedinlogo.png'
import './App.css';
import SocialLogo from './components/SocialLogo/SocialLogo'
import GithubLogo from './images/github.png'

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <img src={logo} className="My-logo rotate-in-2-cw" alt="mylogo" />
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-sm-2">
					<SocialLogo logo={GithubLogo} link={"https://github.com/sanchezfdezjavier"}/>	
				</div>
				<div className="col-sm-2">
					<SocialLogo className="scale-in-center" logo={linkedinLogo} link={"https://www.linkedin.com/in/sanchezfdezjavier"}/>
				</div>
			</div>
		</div>
		<br></br>
        <h1 className="tracking-in-contract-bck">Javier Sánchez Fernández</h1>
            </header>
    </div>
  );
}

export default App;
