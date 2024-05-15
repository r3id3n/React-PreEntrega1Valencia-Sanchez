import { useState } from "react";

function ItemCount(props) {

  const [count, setCount] = useState(0);
  const incrementar = () => {
    setCount(count + 1);
  };
  const decrementar = () => {
    setCount(count - 1);
  };
  const confirmar = () => {
    props.handleConfirm(count);
  };

  return (
    <div className="">
      <div className="flex gap-4">
        <button
          onClick={incrementar}
          className="bg-white rounded-full p-4 text-black"
        >
          {" "}
          +{" "}
        </button>
        <p>{count}</p>
        <button
          onClick={decrementar}
          className="bg-white rounded-full p-4 text-black"
        >
          {" "}
          -{" "}
        </button>
      </div>
      <button className="" onClick={confirmar}>Confirmar cantidad</button>
    </div>
  );
}
export default ItemCount;