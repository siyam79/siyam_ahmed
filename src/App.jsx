import About from "./Components/About"
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import Nav from "./Components/Nav"


function App() {

  return (
    <>

      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <About></About>
      </div>

    </>
  )
}

export default App
