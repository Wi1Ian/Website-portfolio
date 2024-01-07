import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Info from './Pages/info'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path = "/home" element={<Home />} />
          <Route path = "/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
