import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/header';
import Services from './components/Services';
import Packages from './components/Packages';
import Members from './components/Members';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/main.js';
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <div>
    <Header />
    <About />
    <Services />
    <Packages />
    <Members />
    <Contact />
  </div>
  );
}

export default App;
