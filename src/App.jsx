import Details from "./components/Details"
import Feature from "./components/Feature"
import Header from "./components/Header"
import Info from "./components/Info"
import MainSection from "./components/MainSection"
import Offbanner from "./components/Offbanner"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <MainSection />
        <Info />
        <Details />
        <Offbanner />
        <Feature />
      </main>
    </div>
  )
}

export default App