import './app.scss';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
