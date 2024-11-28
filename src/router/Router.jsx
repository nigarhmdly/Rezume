import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "../pages/wishlist/Wishlist";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";



const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;