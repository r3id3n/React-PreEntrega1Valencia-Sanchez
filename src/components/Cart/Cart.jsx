import { createSale } from "../../Controller/utils";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";

function Cart() {
  const { carrito } = useCart();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("Procesando compra...");
    createSale();
    toast.dismiss();
    toast.success("Compra realizada con éxito");
  };
  return (
    <div>
      <h2 className="mb-1 text-3xl font-bold text-cyan-500">Carrito de compras</h2>
      <div>
        {carrito.map((item) => {
          return (
            <article className="p-2">
              <div key={item.id}>
                <h3>Nombre: {item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
              </div>
            </article>
          );
        })}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="p-2">
          <label htmlFor="">Nombre : </label><br />
          <input type="text" className="text-black" placeholder="Nombre" />
        </div>
        <div className="p-2">
          <label htmlFor="">Telefono : </label><br />
          <input type="text" className="text-black" placeholder="912345678" />
        </div>
        <div className="p-2">
          <label htmlFor="">Email : </label><br />
          <input type="text" className="text-black" placeholder="test@test.cl" />
        </div>
        <button className="bg-cyan-500 rounded-full p-2">Comprar</button>
      </form>
    </div>
  );
}

export default Cart;
