import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Cart from "../Cart/Cart"
import Contact from "../Contact/Contact"

function Main() {
  return (
    <main className="container p-4 text-white grow mx-auto">
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoria" element={<ItemListContainer/>} />
        <Route path="/characters/:id" element={<ItemDetailContainer/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </main>
  )
}

export default Main