import Header from '../Components/Header'
import './cat.js'
import './Hobbies.css'
import bird from '../Images/freedbird.jpg'
import tpab from '../Images/tpab.jpg'
// var button = document.createElement('refresh');

export default function Hobbies() {
    return (
        <>

            <Header />
            <div className='block'>
                <h2 className='MainHeader'>Hobbies page</h2>
                <div className="crazy"></div>
                <div className=''><img src={bird} alt='freebird' className='freebird'></img></div>
                <div><p1 className= 'CatLabel'>Cat generator</p1></div>
                <p1 className='music'>Music</p1>
                <br></br>
                <button className="refresh" id='sam' >Refresh</button>
                <img src={tpab} alt = "tpab" className='tpab'></img>
                <p><a href='https://open.spotify.com/track/5EWPGh7jbTNO2wakv8LjUI?si=72f3a262ea394688' className='bird'>Free Bird</a></p>
            </div>
            <div className='fill'></div>
            <script src='/cat.js'></script>
        </>
    )
}