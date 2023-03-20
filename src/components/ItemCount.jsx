import  { useState , useContext } from "react";
import {CartContext} from "../contexts/CartContext.jsx";


const ItemCount = ({id,nombre,precio, stock,img}) => {
 const [carro, setCarro] = useContext(CartContext);
 const [counter, setcounter] = useState (1);

 const sumProd = () =>{
  setcounter(counter + 1 )
 };

 const resProd = () =>{
  setcounter(counter - 1 )
 };

const agregarCarrito = () => {
  setCarro((cItems) => {
    const ExisteItem = cItems.find((item) => item.id === id);
    if(ExisteItem){
      return cItems.map((item) => {

     if(item.id === id){
     return{ ... item, quantity: item.quantity + counter}

     }else{

      return item;
     }
  });
}else{

  return [... cItems,{ id, quantity: counter, precio, nombre,img}];
  }

});

};
  return (
    <>
      <div className="d-flex flex column">
      
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        {counter < 1 ? (
        <button type="button" className="btn btn-contador" disabled="disabled" ></button>   
        ) : (
        <button type="button" className="btn btn-contador" onClick= {resProd}>-</button>
        )}
        <button type="button" className="btn btn-light" >{counter}</button>
        {counter < stock ? (
        <button type="button" className="btn btn-contador" onClick= {sumProd}>+</button>
        ) : (
        <button type="button" className="btn btn-contador" disabled="disabled" ></button> 
        )}
        </div>
        
      </div>
      <button  className="btn btn_principal mt-3"  onClick={() => agregarCarrito()}>Agregar a Carrito</button>
    </>
  );

};
export default ItemCount;
