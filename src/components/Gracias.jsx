import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Loading from "../Components/Loading";


const OrdenFinal = ({order}) => {


    return (
        <div>
            <h1>Gracias por su compra!</h1>
            <p>Su número de orden es: <b>{order.id}</b></p>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="text-center">Producto</td>
                        <td className="text-center">Cantidad</td>
                        <td className="text-center">Precio</td>
                        <td className="text-center">Total</td>
                    </tr>
                    {order.items.map(item => (
                        <tr key={item.id}>
                            <td width={"45%"} className="align-middle">{item.nombre}</td>
                            <td width={"15%"} className="align-middle text-center">{item.quantity}</td>
                            <td width={"15%"} className="align-middle text-center">{item.precio}</td>
                            <td width={"15%"} className="align-middle text-center">${item.precio*item.quantity}</td>
                          
                        </tr>
                    ))}
                
                    <tr>
                    
                    </tr>
                </tbody>
            </table>
           
        </div>
    )
}



const Gracias = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const orderDoc = doc(db, "orden", id);
        getDoc(orderDoc).then((response) => {
            if (response.exists()) {
                setOrder({id:response.id, ...response.data()});
                setLoading(false);
            }
        })
    }, [id]);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    {loading ? <Loading /> : <OrdenFinal order={order} />}      
                       
                </div>
            
            </div>
        </div>
    )
    
  
    
}

export default Gracias;