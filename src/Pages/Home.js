import Header from "../Components/Header";
import "./Home.css";
import image from "../Images/IMG_5126.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="block">
        <div className="textBox">
          <h1 className="header">Home</h1>
          <p className="paragraph">
            Hello my name is Jay, and I like to program, I made this website to
            provide more information about me while seeing a project I created.
            <br />
            The home page is meant to give a basic overview about me. <br />
            The info page will give you my contact information. <br />
            The project page will let you see and download my old projects,
            <br /> The hobbies page you can learn more about my personal life
            and interests.
            <br />
            <img src={image} className="image" alt="img of me"></img>
          </p>
        </div>
        <div className="fill"></div>
      </div>
    </>
  );
}
