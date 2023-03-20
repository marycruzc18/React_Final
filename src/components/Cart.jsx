import { useContext } from "react";
import { Link } from "react-router-dom";
import  {CartContext}  from "../contexts/CartContext.jsx";



const Cart = () => {
    const [carro, setCarro,eliminarCarrito,limpiar,carroTotal, carroSum] = useContext(CartContext);
  
    
    if(carroTotal() === 0){
        return(
            <div className="container py-5">
            <div className="row">
                <div className="col">
                    <div className="alert alert-warning text-center" role="alert">No se encontraron productos en el Carrito!</div>
                    <div className="text-center">
                        <Link to={"/"} className="btn btn_principal">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
 
 return (
    <div className="container py-5">
        <div className="row">
            <div className="col">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="aling-middle text-end" colSpan={5}><Link onClick={() => limpiar()} className="btn btn_principal">Vaciar Carrito </Link></td>
                        </tr>
                        <tr>
                            <td className="text-center" colSpan={2}>Producto</td>
                            <td className="text-center" >Cantidad</td>
                            <td className="text-center" >Precio</td>
                        </tr>
                        {carro.map(item =>
                          <tr key={item.id}> 
                            <td width={"10%"}><img src={item.img} alt={item.id} width={64} /></td>
                            <td width={"45%"} className="align-middle">{item.nombre}</td>
                            <td width={"15%"} className="align-middle text-center">{item.quantity}</td>
                            <td width={"15%"} className="align-middle text-center"><b>{item.quantity * item.precio}</b></td>
                            <td width={"15%"} className="align-middle text-end">
                             <button onClick={() => {eliminarCarrito(item.id)}} className="btn btn_principal">Eliminar</button>
                            </td>
                          </tr>  
                         
                    )}

                            <tr>
                                <td className="align-middle text-end" colSpan={3}>Total:</td>
                                <td className="align-middle text-center"><b>${carroSum().toFixed(2)}</b></td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn btn_principal">Comprar</Link></td>
                            
                            </tr>

                    </tbody>

                </table>
            </div>
        </div>


    </div>

 )



 }

    


export default Cart;