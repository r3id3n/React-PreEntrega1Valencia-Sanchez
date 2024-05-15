import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductDetail} from "../../Controller/utils";

function ItemDetailContainer() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getProductDetail(id)
      .then((res) => {
        setCharacter(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <ItemDetail character={character} />
    </div>
  );
}
export default ItemDetailContainer;
