import Header from '../Components/Header'
import './cat.js'
import './Hobbies.css'
import bird from '../Images/freedbird.jpg'
import tpab from '../Images/tpab.jpg'
import nirvana from '../Images/Nirvana.png'
import duvet from '../Images/duvet.jpg'
import DOOM from '../Images/MFDOOM.png'

export default function Hobbies() {
    return (
        <>

            <Header />
            <div className='block2'>
                <h2 className='MainHeader'>Hobbies page</h2>
                <div className="crazy"></div>
                <div className=''><img src={bird} alt='freebird' className='freebird'></img></div>
                <div><p1 className= 'CatLabel'>Cat generator</p1></div>
                <p1 className='music'>Music</p1>
                <br></br>
                <button className="refresh" id='sam' >Refresh</button>
                <img src={tpab} alt = "tpab" className='tpab'></img>
                <img src={nirvana} alt = "nirvana" className='nirvana'></img>
                <img src={duvet} alt = "twilight" className='duvet'></img>
                <img src={DOOM} alt = "Madvillany" className='DOOM'></img>
                <p className='bird'><a href='https://open.spotify.com/track/5EWPGh7jbTNO2wakv8LjUI?si=72f3a262ea394688' className='birdlink'>Free Bird</a></p>
                <p className='kendrick'><a href='https://open.spotify.com/track/7Ks4VCY1wFebnOdJrM13t6?si=15ca5895d9084437' className='birdlink'>Wesley’s Theory</a></p>
                <p className='bowie'><a href='https://open.spotify.com/track/15VRO9CQwMpbqUYA7e6Hwg?si=7595288330f74930' className='birdlink'>The Man Who Sold The World</a></p>
                <p className='twilight'><a href='https://open.spotify.com/track/42qNWdLKCI41S4uzfamhFM?si=22c531395bb9482e8' className='birdlink'>Duvet</a></p>
                <p className='MFDOOM'><a href='https://open.spotify.com/track/3KQh7ppbDxVjdJBtjvP5BU?si=2164b4652b0f4c7b688' className='birdlink'>Raid</a></p>
            </div>
            <div className='fill2'></div>
            <script src='/cat.js'></script>
        </>
    )
}