import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Gracias from "./components/Gracias";
import { CartContextProvider } from "./contexts/CartContext";
import "./App.css";

const  App = () => {
 

  return (
  
    <CartContextProvider>

        <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route exact path="/" element= {<ItemListContainer />} />

          <Route exact path="/category/:category" element= {<ItemListContainer/>} />

          <Route exact path="/item/:id" element= {<ItemDetailContainer/>} />

          <Route exact path="/cart" element= {<Cart/>} />

          <Route exact path={"/checkout"} element={<Checkout />} />

          <Route exact path={"/gracias/:id"} element={<Gracias />} />

        </Routes>
        <Footer />
        </BrowserRouter>

    </CartContextProvider>
  );
};

export default App;
