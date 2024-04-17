import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ id, name, price, category, stock }) {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">Nombre : {name}</h2>
      </header>
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
