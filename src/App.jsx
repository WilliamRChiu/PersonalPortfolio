import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Projects" element={<Projects/>}/>
        <Route path = "/About" element = {<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
