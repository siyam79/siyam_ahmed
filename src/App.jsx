import About from "./Components/About"
import Header from "./Components/Header"
import Nav from "./Components/Nav"


function App() {

  return (
    <>

      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header></Header>
        <Nav></Nav>
        <About></About>
      </div>

    </>
  )
}

export default App
