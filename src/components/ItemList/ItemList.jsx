import React from "react";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <>
      <h2 className="my-2 font-bold">{name}</h2>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </>
  );
}
export default ItemList;
