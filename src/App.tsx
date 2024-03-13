import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App
