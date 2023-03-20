import React from 'react';
import {useContext} from "react"
import {CartContext} from "../contexts/CartContext.jsx";



const CartWidget = () => {

  const [carro, setCarro] = useContext(CartContext);

  const cantidad = carro.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);



    return(
                  <button type="button" className="btn btn_principal_2 position-relative">
                    <i className="bi bi-cart mx-5  carrito" data-bs-toggle="modal"  data-bs-target="#modal" id="carritoContenedor" ></i>
                    <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill  translate-middle badge rounded-pill numero">{cantidad}</span>
                  </button>
        

    
    );

}

export default CartWidget;