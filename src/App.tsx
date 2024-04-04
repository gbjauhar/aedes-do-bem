import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Confirm from './pages/Confirm'

function App() {
  const whatsAppLink = window.innerWidth < 800
  ? "https://wa.me/6499299158"
  : "https://web.whatsapp.com/send/?phone=6499299158&text&type=phone_number&app_absent=0";
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home whatsAppLink={whatsAppLink} />} />
        <Route path="checkout" element={<Checkout whatsAppLink={whatsAppLink} />}/>
        <Route path="confirm" element={<Confirm whatsAppLink={whatsAppLink} />}/>
    </Routes>
</BrowserRouter>
  )
}

export default App
