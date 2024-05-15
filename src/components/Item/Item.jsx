import { Button } from "antd";
import { Link } from "react-router-dom";

function Item({ character }) {
  const { id, name, image, price, category, stock } = character;
  return (
    <div className="user-card p-4 transition rounded-md shadow-md hover:scale-105 group bg-cyan-800">
      <div className="aspect-square overflow-hidden">
        <img
          className="w-full rounded-md grayscale group-hover:grayscale-0 object-cover group-hover:scale-110 duration-500 transition-all border-4 border-cyan-500"
          src={image}
          alt="Card image proce"
        />
      </div>
      <div className="text-left">
        <h2 className="text-xl font-bold mt-4">{name}</h2>
        <p className="text-white">{category}</p>
        <p className="text-white">Valor: ${price}</p>
        <p className="text-white">Stock: {stock}</p>
      </div>
        <Link
          to={`/characters/${id}`}
          className="btn btn-primary mt-4 flex justify-center"
        >
          Ver más
        </Link>
    </div>
  );
}
export default Item;
