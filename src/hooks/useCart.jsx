import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";

const useCart = () => {
    const valorContexto = useContext(CartContext);
    return valorContexto;
}

export default useCart;