 import About from "./components/About/About"
import Contect from "./components/Contact/Contect"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/MyWork/MyWork"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contect/>
      <Footer/>
    </div>
  )
}

export default App
