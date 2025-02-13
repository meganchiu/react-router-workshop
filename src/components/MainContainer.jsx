import { Routes, Route, Link } from "react-router-dom"
import Blue from "./Blue"
import Red from './Red'
import Home from './Home'
import Orange from './Orange'
import Yellow from './Yellow'
import Green from './Green'
import Purple from './Purple'

function MainContainer() {
 return (
  <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/red" element={<Red />} />
      <Route path="/orange" element={<Orange />} />
      <Route path="/yellow" element={<Yellow />} />
      <Route path="/green" element={<Green />} />
      <Route path="/blue" element={<Blue />} />
      <Route path="/purple" element={<Purple />} />
    </Routes>
  </>
 );
}

export default MainContainer;