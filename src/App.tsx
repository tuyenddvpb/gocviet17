import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1517]">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
