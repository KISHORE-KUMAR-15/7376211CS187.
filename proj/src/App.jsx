import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Product } from './components/Product';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
      

        </Routes>
      </Router>
    </>
  )
}

export default App
