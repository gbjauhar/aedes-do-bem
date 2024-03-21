import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Confirm from './pages/Confirm'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="confirm" element={<Confirm/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App
