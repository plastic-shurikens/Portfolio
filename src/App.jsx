import { useState } from 'react';
import './app.scss';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Slider from './components/Slider/Slider'
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Slider />
        <Testimonials />
        <Contact />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
