import Header from '../Components/Header'
import './Home.css'
import image from '../Images/IMG_5126.jpg'

export default function Home() {
    return (
        <>
            <Header />
            <div className='block'>
                <div className='textBox'>
                    <h1 className='header'>Home</h1>
                    <p className='paragraph'>Hello my name is Jay, and I like to program, I made this website to provide more information about me while seeing a project
                        I created.<br/><img src = {image} className='image' alt='img of me'></img><br/><br/>The home page is meant to give a basic overview about me. the info page will give you my contact information. The project page will let you see and
                        download my old projects, and in my hobbies page you can learn more about
                        my personal life and interests.</p>
                </div>
                <div className='fill'></div>
            </div>
        </>
    )
}