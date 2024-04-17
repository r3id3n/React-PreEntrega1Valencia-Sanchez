import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ id, name, price, category, stock, img }) {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">Nombre : {name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio : {price}</p>
        <p className="Info">Categoria : {category}</p>
        <p className="Info">Stock : {stock}</p>
      </section>
      {/* <ItemCount initial={1} stock={stock} onAdd={(count)=> console.log(`Cantidad agregada ${count}`)} /> */}
    </article>
  );
}
export default ItemDetail;
