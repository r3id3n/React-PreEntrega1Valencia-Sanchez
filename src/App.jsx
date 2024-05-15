import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CartContext from "./components/context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main/> 
        <Footer/>
      </CartContext>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
