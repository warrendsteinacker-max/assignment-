
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//will use this fir creating actual website

import './App.css'
import Mod1 from './comps/Mod1'
import Mod2 from './comps/Mod2'
import Mod3 from './comps/Mod3'
import Home from './comps/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mod1" element={<Mod1 />} />
          <Route path="/mod2" element={<Mod2 />} />
          <Route path="/mod3" element={<Mod3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
