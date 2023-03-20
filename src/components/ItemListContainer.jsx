import ItemList from "./ItemList";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import{ collection, getDocs, getFirestore } from "firebase/firestore";



const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const {category} = useParams();
    
    useEffect(() => {
      const db = getFirestore();
      const productosCollection = collection (db, "productos");
      getDocs(productosCollection).then ((querySnapshot) => {
        const productos= querySnapshot.docs.map((doc) => ({
        ...doc.data(), 
        id:doc.id,
        }));
        setProductos(productos);
      });
   
    }, []);


    const filCate = productos.filter((producto)=> producto.category === category );

    return (

        <div>
            {category ? <ItemList productos = {filCate} /> : <ItemList productos = {productos} />}
        </div>
    );

};

   

export default ItemListContainer;