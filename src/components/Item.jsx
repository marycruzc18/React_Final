import React from "react";
import {Link} from "react-router-dom";

const Item = ({id, nombre,stock,precio,img}) => {
  return (
  <div>
    <div key= {id}>
      <article className="card">
        <img className= "card-img-top" src={img} />
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Precio: {precio}</p>
            <p className="card-text">Stock: {stock}</p>
            <Link className="btn btn_principal" to = {`/item/${id}`}>
            Detalles
            </Link>
        </div>
      </article>
      </div>
  </div> 
  )
}

export default Item;

