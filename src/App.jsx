import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;
