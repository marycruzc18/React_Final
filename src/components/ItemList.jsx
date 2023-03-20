import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
    <section className="item_list">
        {productos?.map((producto) =>(
            <Item
              Key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              img={producto.img}
              category={producto.category}
            />
        ))

        }
    </section>
    </>
  );
};

export default ItemList;
