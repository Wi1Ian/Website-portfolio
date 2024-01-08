import './Header.css';
export default function Header(){
    return(
        <nav>
            <ul>
                <li> <a href='/home'>Home</a></li>
                <li> <a href='/info'>Info</a></li>
                <li> <a href='/projects'>Projects</a></li>
                <li> <a href='/hobbies'>Hobbies</a></li>
            </ul>
        </nav>
        
    )
}