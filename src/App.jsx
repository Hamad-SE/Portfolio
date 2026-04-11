import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  useEffect(() => {
    document.body.classList.add('index-page');

    // Preloader fallback removal in case main.js window.onload is missed
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }

    // Load main.js dynamically to initialize animations after React renders
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.classList.remove('index-page');
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (window.location.pathname === '/admin') {
    return (
      <main className="main">
        <AdminPanel />
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
