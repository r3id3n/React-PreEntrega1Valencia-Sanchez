import DataCard from "../../Data/DataCard";
function ItemListContainer() {
  return (
    <main className="p-4 grow">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 users drop-shadow-2xl">
        <DataCard nombre="Foto 1" />
        <DataCard nombre="Foto 2" />
        <DataCard nombre="Foto 3" />
      </section>
    </main>
  );
}
export default ItemListContainer;
