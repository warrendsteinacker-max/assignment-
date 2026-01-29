
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//will use this fir creating actual website

import './App.css'
import Mod1 from './comps/Mod1'
import Mod2 from './comps/Mod2'
import Mod3 from './comps/Mod3'
import Home from './comps/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <nav style={{position: 'sticky', top: 0, display: 'flex', gap: '20px', justifyContent: 'center', background: 'linear-gradient(to right, orange, pink)', padding: '10px'}}>
          <img src="/src/assets/logo.png" alt="Logo" style={{width: '50px', height: '50px'}} />
          <Link to="/">Home</Link>
          <Link to="/mod1">Module 1</Link>
          <Link to="/mod2">Module 2</Link>
          <Link to="/mod3">Module 3</Link>
        </nav>
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
