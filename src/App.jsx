// import { Route, Routes } from "react-router-dom"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./componenets/Benefits"
import Collaboration from "./componenets/Collaboration"
import Header from "./componenets/Header"
import Hero from "./componenets/Hero"
import Services from "./componenets/Services"

const App = () => {

  return (
    <>
      <ButtonGradient />
      <Header />
      {/* <Hero />
      <Benefits />
      <Collaboration /> */}
      <Services/>
    </>
  )
}

export default App
