import About from "./Components/About"
import Banner from "./Components/Banner"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import Work from "./Components/Work"
import "../src/Components/Home/Home.css"
import React, { useEffect, useState } from 'react';


function App() {

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const scrollPercentage = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const newValue = Math.round((pos * 100) / calcHeight);
      setScrollValue(newValue);
    };

    window.addEventListener('scroll', scrollPercentage);
    window.addEventListener('load', scrollPercentage);

    return () => {
      window.removeEventListener('scroll', scrollPercentage);
      window.removeEventListener('load', scrollPercentage);
    };
  }, []);












  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>


        <div id="progress" style={{ background: `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)` }}>
          <span id="progress-value">{scrollValue}%</span>
        </div>




        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Work></Work>
        <Contact></Contact>
      </div>

    </>
  )
}

export default App
