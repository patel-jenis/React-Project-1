import Details from "./components/Details"
import Header from "./components/Header"
import Info from "./components/Info"
import MainSection from "./components/MainSection"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <MainSection />
        <Info />
        <Details />
      </main>
    </div>
  )
}

export default App