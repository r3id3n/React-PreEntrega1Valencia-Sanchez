import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="flex items-center gap-4 text-white justify-center">
      <div className="items-center hidden md:flex md:gap-4">
        <Link to="/">Productos</Link>
        <Link to="/category/AMD">AMD</Link>
        <Link to="/category/Intel">Intel</Link>
        <Link to="/contact">Contacto</Link>
        <CartWidget />
      </div>
      <Menu width={20} height={20} className="md:hidden"/>
    </nav>
  );
}
export default NavBar;
