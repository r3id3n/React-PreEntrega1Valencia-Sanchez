import { useEffect, useState } from "react";
import { getProductById } from "../../Data/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [itemId]);

  return (
    <main className="p-4 grow">
      <div className="ItemDetailContainer">
        <ItemDetail {...product} />
      </div>
    </main>
  );
}
export default ItemDetailContainer;
