import { Store } from "lucide-react";
import { useState } from "react";

function CartWidget() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Store />
      <button onClick={handleClick}>
        <span>{count}</span>
      </button>
    </>
  );
}

export default CartWidget;
