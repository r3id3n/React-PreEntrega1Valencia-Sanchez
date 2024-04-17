import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, name, price, category, stock}) {
  return (
    <article className="CardItem">
        <header className='Header'>
            <h2 className='ItemHeader'>Nombre : {name}</h2>
        </header>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className='Info'>
                Categoria: {category}
            </p>
            <p className='Info'>
                Stock : {stock}
            </p>
        </section>
        <Link to={`/item/${id}`} className='Option'> ver Detalle </Link>
    </article>
  );
}
export default Item;