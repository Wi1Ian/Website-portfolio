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
          <a href='https://github.com/HDSB-GWS-Brooks-202223-ICS3-01/minigame-assignment-Wi1Ian.git'><button className='ballgameDownload'>Download</button></a>
          <a href='https://github.com/HDSB-GWS-Brooks-202223-ICS3-01/final-project-Wi1Ian'><button className='dungeonGameDownload'>Download</button></a>
          <a href='https://github.com/HDSB-GWS-LTO-202324-ICS4-02/ics4-fpt-semester-1-2023-2024-Verma-Jay.git'><button className='websiteDownload'>Download</button></a>
        </div>
        <div className="fill"></div>
      </div>
        </>
    )
}