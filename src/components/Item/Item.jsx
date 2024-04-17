import React from "react";
import { Link } from "react-router-dom";

function Item({ id, name, price, category, stock }) {
  return (
    <div className="user-card p-4 transition rounded-md shadow-md hover:scale-105 group bg-slate-300">
      <h2 className="my-2 font-bold">{name}</h2>
      <section>
        <p>{price}</p>
        <p>{category}</p>
        <p>{stock}</p>
      </section>
      <Link to={`/item/${id}`} className="Option">
        {" "}
        ver Detalle{" "}
      </Link>
    </div>
  );
}
export default Item;
