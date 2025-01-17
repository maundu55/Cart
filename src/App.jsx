import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar  from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App