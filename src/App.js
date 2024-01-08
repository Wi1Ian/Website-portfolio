import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Info from './Pages/info'
import Projects from './Pages/Projects'
import Hobbies from './Pages/Hobbies'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path = "/home" element={<Home />} />
          <Route path = "/info" element={<Info />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
