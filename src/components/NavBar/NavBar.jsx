import { Menu } from "lucide-react";
import { Store } from "lucide-react";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <header className="bg-slate-600 p-4 flex justify-between drop-shadow-xl text-white">
      <h1 id="titulo" className="encabezado">
        Menu-Mi Empresa
      </h1>
      <nav className="flex items-center gap-4">
        <div className="items-center hidden md:flex md:gap-4">
          <a href="#">Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Productos</a>
          <a href="#">Contactanos</a>
        </div>
        {/* <img src={miImagen} alt="" /> */}
        <CartWidget />
        <Menu width={20} height={20} className="md:hidden" />
      </nav>
    </header>
  );
}
export default NavBar;
