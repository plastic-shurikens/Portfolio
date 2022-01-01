import { useState } from 'react';
import './app.scss';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app" >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Projects menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <About menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
