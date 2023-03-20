import React from "react";
import {createContext, useState} from 'react';


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [carro, setCarro] = useState([]);

  const eliminarCarrito = (id) =>{
    setCarro(carro.filter(x => x.id !== id));
  }
 
  const limpiar = (id) => {
    setCarro([]);
  }

const carroTotal = () =>{
  return carro.reduce((total,item)=> total += item.quantity * item.precio,0);
}

const carroSum = () => {
  return carro.reduce((total, item) => total += item.quantity * item.precio, 0);
}

  return (
    <CartContext.Provider value={[carro,setCarro,eliminarCarrito,limpiar,carroTotal,carroSum]}>
      {children}
    </CartContext.Provider>
  );
};