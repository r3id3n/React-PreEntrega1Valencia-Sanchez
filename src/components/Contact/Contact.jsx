function Contact() {
  return (
    <div>
      <h2 className="mb-1 text-3xl font-bold text-cyan-500">Contactanos</h2>
      <form action="">
        <div className="p-2">
          <label htmlFor="">Nombre : </label><br />
          <input type="text" className="text-black" placeholder="Nombre" />
        </div>
        <div className="p-2">
          <label htmlFor="">Telefono : </label><br />
          <input type="text" className="text-black" placeholder="912345678" />
        </div>
        <div className="p-2">
          <label htmlFor="">Email : </label><br />
          <input type="text" className="text-black" placeholder="test@test.cl" />
        </div>
        <div className="p-2">
          <label htmlFor="">Comentanos : </label><br />
          <textarea rows="5" cols="50" className="text-black" placeholder="test@test.cl" />
        </div>
        <button className="bg-cyan-500 rounded-full p-2">Enviar</button>
      </form>
    </div>
  )
}

export default Contact