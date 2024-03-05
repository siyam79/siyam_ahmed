import About from "./Components/About"
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import Work from "./Components/Work"


function App() {

  return (
    <>

      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Work></Work>
      </div>

    </>
  )
}

export default App
