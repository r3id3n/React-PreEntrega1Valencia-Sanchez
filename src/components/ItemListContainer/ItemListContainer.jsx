import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../Data/asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    asyncFunc(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [categoryId]);
  return (
    <main className="p-4 grow">
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 users drop-shadow-2xl"> */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
        <ItemList products={products} />
      </section>
    </main>
  );
}
export default ItemListContainer;
