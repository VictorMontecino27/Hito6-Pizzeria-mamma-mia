import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CartProvider>
        <Navbar />
        
        {/* AGREGADO: 'pt-5 mt-5' para bajar el contenido y que no lo tape el Navbar */}
        <div className="container-fluid p-0 pb-5 mb-5 pt-5 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <div className="fixed-bottom w-100">
          <Footer />
        </div>
        
      </CartProvider>
    </div>
  );
}

export default App;