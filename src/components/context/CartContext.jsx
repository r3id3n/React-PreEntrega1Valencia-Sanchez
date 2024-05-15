import { createContext, useState } from "react";

export const CartContext = createContext();
const Provider = CartContext.Provider;

function CustomContext(props) {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarAlCarrito = (cant, item) => {
    setCantidadTotal(cant + cantidadTotal);
    const copia = carrito.slice(0);
    const productoConCantidad = item;
    productoConCantidad.cantidad = cant;
    copia.push(productoConCantidad);
    setCarrito(copia);
  };
  const eliminarDelCarrito = (item) => {
    const copia = carrito.slice(0);
    const index = copia.indexOf(item);
    copia.splice(index, 1);
    setCarrito(copia);
    setCantidadTotal(cantidadTotal - item.cantidad);
  };
  const vaciarCarrito = () => {
    setCantidadTotal(0);
    setCarrito([]);
  };

  const valorDelContexto = {
    carrito: carrito,
    precioTotal: precioTotal,
    cantidadTotal: cantidadTotal,
    agregarAlCarrito: agregarAlCarrito,
    eliminarDelCarrito: eliminarDelCarrito,
    vaciarCarrito: vaciarCarrito,
  };

  return <Provider value={valorDelContexto}>{props.children}</Provider>;
}
export default CustomContext;
