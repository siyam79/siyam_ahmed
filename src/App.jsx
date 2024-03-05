import About from "./Components/About"
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Skills from "./Components/Skills"


function App() {

  return (
    <>

      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <About></About>
        <Skills></Skills>
      </div>

    </>
  )
}

export default App
