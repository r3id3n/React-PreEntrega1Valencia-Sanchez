import { Store } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

function CartWidget() {
  const elValorDelContexto = useCart();
  return (
    <Link to="/cart" className="flex items-center gap-2">
      <Store />
      {elValorDelContexto.cantidadTotal}
    </Link>
  );
}
export default CartWidget;
