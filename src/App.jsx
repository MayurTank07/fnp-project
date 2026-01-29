import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* DEFAULT redirect */}
        <Route path="/category" element={<Navigate to="/category/cake" />} />

        <Route path="/category/:type" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />

    </div>
  )
}

export default App
