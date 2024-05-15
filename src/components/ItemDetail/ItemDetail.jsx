import ItemCount from "../ItemCount/ItemCount";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";

function ItemDetail(props) {
  const valorDelContexto = useCart();
  const handleConfirm = (count) => {
    valorDelContexto.agregarAlCarrito(count, props.character);
    toast.success("Producto agregado al carrito");
  };
  return (
    <>
      <p className="mb-1 text-3xl font-bold text-cyan-500">
        Procesador
      </p>
      <h2 className="mb-20 text-4x1 font-bold">
        {props.character.name}
      </h2>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            className="rounded-md lg:w-auto object-cover border-4 border-cyan-500"
            src={props.character.image}
            alt={props.character.name}
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <h3 className="mb-2 text-xl font-bold text-cyan-500">Precio</h3>
            <p>$ {props.character.price}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-cyan-500">
              Detalle Tecnico
            </h3>
            <p>
              <span className="font-bold ">Core</span> :{" "}
              {props.character.cores}
            </p>
            <p>
              <span className="font-bold">Frecuencia</span> :{" "}
              {props.character.frequency} MHz
            </p>
            <p>
              <span className="font-bold">Socket</span> :{" "}
              {props.character.socket}
            </p>
          </div>
          <ItemCount handleConfirm={handleConfirm} />
        </div>
      </section>
    </>
  );
}
export default ItemDetail;
