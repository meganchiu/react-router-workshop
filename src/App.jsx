import { useState } from 'react'
import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <Navbar />
        <div id="main-section">
          <MainContainer />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
