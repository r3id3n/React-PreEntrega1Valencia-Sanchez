import { Menu } from "lucide-react";
import { NavLink , Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <header className="bg-slate-600 p-4 flex justify-between drop-shadow-xl text-white">
      <h1 id="titulo" className="encabezado">
        <Link to={'/'}>Menu-Mi Empresa</Link>
      </h1>
      <nav className="flex items-center gap-4 text-white justify-center">
        <div className="items-center hidden md:flex md:gap-4">
          <NavLink to={`/category/AMD`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> AMD</NavLink>
          <NavLink to={`/category/Intel`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Intel</NavLink>
        </div>
        <Menu width={20} height={20} className="md:hidden" />
      </nav>
      <CartWidget />
    </header>
  );
}
export default NavBar;
