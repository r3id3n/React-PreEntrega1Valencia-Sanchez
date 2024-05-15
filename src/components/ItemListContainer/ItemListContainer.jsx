import { useEffect, useState } from "react";
import { getProducts , getProductCategories } from "../../Controller/utils";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [characters, setCharacters] = useState([]);
  const paramet = useParams();

  useEffect(() => {
    if(paramet.categoria){
      getProductCategories(paramet.categoria)
      .then((res) => {
        setCharacters(res);
      });
    }else{
      getProducts()
      .then((res) => { 
        setCharacters(res);
       })
    }
  }, [paramet.categoria]);
  return (
    <div>
      <h1 className="p-4 mb-1 text-3xl font-bold text-cyan-500">Procesadores</h1>
      <ItemList characters={characters} />
    </div>
  );
}
export default ItemListContainer;
