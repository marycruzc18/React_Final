import React from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetail = ({productos}) => {
    const {id} = useParams();
    const [products,setProductos] = useState ([]);

    useEffect(()=> {
      const db = getFirestore();
      const product = doc(db, "productos" ,`${id}`);

      getDoc(product).then((snapshot)=>{
        if(snapshot.exists()){
          setProductos(snapshot.data());
        }else{
          console.log("Error, no se encontro el producto")
        }
      });
    }, []);


    const productoFilter = productos.filter((producto)=> producto.id == id);

  return (
    <>
      {productoFilter.map ((producto) => (
      <div  key={producto.id}>
        <div className="col-12 col-lg-4 col-md-6" >
        <div className="card" >
            <img className= "card-img-top" src={producto.img}  />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.category}</p>
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <ItemCount 
                id = {producto.id}
                nombre = {producto.nombre}
                precio = {producto.precio}
                stock = {producto.stock}
                img = {producto.img}
                />
               
              
          </div>
        </div>
       </div>
     </div>
        ))}
    </>

  );
};

export default ItemDetail;
