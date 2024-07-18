
import './App.css';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/Gallery" element={<Gallery/>} />
          </Routes>
        </BrowserRouter>
    </div>
   
  );
}
export default App;
