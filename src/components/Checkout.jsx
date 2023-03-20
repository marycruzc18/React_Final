import React, { useState, useContext } from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {CartContext} from "../contexts/CartContext.jsx";
import { Navigate } from "react-router-dom";




const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] =  useState("");
  const [carro, carroSum] = useContext(CartContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "" || email === ""){
        Swal.fire({
            title: '¡Debes ingresar tu nombre y tu email!',
            text: 'Completa el formulario',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }else{
        addDoc(ordersCollection, order). then(({id}) => setOrderId(id));
    }
   setEmail(" ");
  };
const db = getFirestore();
const ordersCollection = collection(db, "orden");
const items = [];
carro.forEach(item => {
    items.push({id:item.id, nombre:item.nombre, precio:item.precio, quantity:item.quantity});
});
let fecha = new Date();
let fecha_actual = `${fecha.getDate()}-${(fecha.getMonth()+1)}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`; 
  const order = {
   name,
   email,
   items:items,
   date:fecha_actual,
 

  }
  
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onChange={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                     
                      {orderId ? <Navigate to={"/gracias/" + orderId} /> : <button  className="btn btn_principal" >Finalizar Compra</button>}
                    
                </form>
            </div>
            <div className="container">
                <div>
                    <h1>Order ID: {" "}</h1>
                    <h2>{orderId}</h2>
                </div>
               < div className="col-md-4">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-center" colSpan={2}>Producto</td>
                                <td className="text-center">Cantidad</td>
                                <td className="text-center">Precio</td>
                            </tr>
                            {carro.map(item => (
                                <tr key={item.id}>
                                    <td width={"10%"}><img src={item.img} alt={item.id} width={64} /></td>
                                    <td width={"45%"} className="align-middle">{item.nombre}</td>
                                    <td width={"15%"} className="align-middle text-center">{item.quantity}</td>
                                    <td width={"15%"} className="align-middle text-center"><b>{item.quantity * item.precio}</b></td>
                                   
                                </tr>
                            ))}
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
}

export default Checkout;