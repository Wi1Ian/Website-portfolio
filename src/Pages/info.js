import Header from "../Components/Header";
import "./info.css";
import gitLogo from "../Images/git.png";
import linkedInLogo from "../Images/LinkedIn.png"
import instagramLogo from "../Images/instagram.png"

export default function info() {
  return (
    <>
      <Header />
      <div className="mainBlock">
        <div className="info">
          <h1 className="header"> Contact information</h1>
          <p className="header2">Email: jayvermaa@icloud.com</p>
          <p className="header2">Phone Number: 437-983-2754</p>
          <footer className="footer"> 
          <a href="https://github.com/Wi1Ian" className="h">
          <img className="gitLogo" src={gitLogo} alt="gitLogo"></img>
          </a>
          <a href="https://www.linkedin.com/in/jay-verma-17762123a/">
          <img className="linkedInLogo" src={linkedInLogo} alt="linkedInLogo"></img>
          </a>
          <a href="https://www.instagram.com/jayvrma123/">
          <img className="instaLogo" src={instagramLogo} alt="Instagram Logo"></img>
          </a>  
          </footer>
        </div>
        
      </div>
      <div className="fill"></div>
    </>
  );
}
