import Header from '../Components/Header'
import './Projects.css'
import ballGameIMG from "../Images/ballGame.png"
import dungeonGameIMG from "../Images/dungeonGame.png"
import websiteIMG from "../Images/website.png"

export default function Projects() {
    return(
        <>
            <Header />
            <div className="block">
        <div className="textBox">
          <h1 className="header">Projects</h1>
          <img src={ballGameIMG} className='ballGameImg' alt='ballgame'></img>
          <img src={dungeonGameIMG} className='dungeonGameIng' alt="dungeonGame"></img>
          <img src={websiteIMG} className='websiteIMG' alt="website"></img>
          <button className='ballgameDownload'>Download</button>
          <button className='dungeonGameDownload'>Download</button>
          <button className='websiteDownload'>Download</button>
        </div>
        <div className="fill"></div>
      </div>
        </>
    )
}