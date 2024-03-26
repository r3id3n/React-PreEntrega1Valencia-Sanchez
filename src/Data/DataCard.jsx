import { Button } from "antd";

function DataCard(props) {
  return (
    <div className="grid gap-4 place-items-center">
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <h2>{props.nombre}</h2>
      <Button>Un boton indefenso</Button>
    </div>
  );
}
export default DataCard;
