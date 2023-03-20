import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import{ collection, getDocs, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection (db, "productos");
        getDocs(productosCollection).then ((querySnapshot) => {
          const productos= querySnapshot.docs.map((doc) => ({
          ...doc.data(), 
          id:doc.id,
          }));
          setDatos(productos);
        });
     
      }, []);
  
    return <ItemDetail productos = {datos} />
};



export default ItemDetailContainer;
