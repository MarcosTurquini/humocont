import { useState } from "react";

export default function Contacto() {

 

    const [datos, setDatos] = useState ({
      nombre:"",
      apellido: "",
      telefono :"",
      email: "",
      mensaje: "",
    });

  
  
  
  const submit = (e)=> {
    e.preventDefault();
    console.log ("Datos Enviados", datos)
  } 

  const handleDatos = (e) => {
    setDatos ({
              ...datos,
              [e.target.name]: e.target.value})
  }



  return (
    <>
    
           
      <div className=" block justify-center items-center p-8 gap-5 max-w-3xl m-auto">
        <h1 className="text-center font-bold text-2xl pb-8">Contactanos</h1>
        <form onSubmit={submit} className="flex flex-col gap-2 p-2 rounded-md w-full  border bg-red-400 border-black ">
                  <label className="rounded-md text-white font-bold p-1" htmlFor="nombre">Nombre</label>
                  <input className="rounded-md p-1" type="text" name="nombre" placeholder="Escriba su nombre aqui" onChange={handleDatos} value={datos.nombre}/>
                  <label className="rounded-md text-white font-bold p-1" htmlFor="apellido">Apellido</label>
                  <input className="rounded-md p-1" type="text" name="apellido" placeholder="Escriba su apellido aqui" onChange={handleDatos} value={datos.apellido} />
                  <label className="rounded-md text-white font-bold p-1" htmlFor="tel">Numero de telefono</label>
                  <input className="rounded-md p-1" type="phone" name="telefono" placeholder="Numero de Telefono" onChange={handleDatos} value={datos.telefono} />
                  <label className="rounded-md text-white font-bold p-1" htmlFor="email">Email</label>
                  <input className="rounded-md p-1" type="email" name="email" placeholder="Escriba su Email aqui" onChange={handleDatos} value={datos.email} />
                  <label className="rounded-md text-white font-bold p-1" htmlFor="mensaje">Mensaje(Opcional)</label>
                  <textarea className="max-h-36 rounded-md p-1" name="mensaje" id="" cols="10" rows="10" maxLength={300} onChange={handleDatos} value={datos.mensaje}></textarea>
                  <input className="bg-red-600 rounded-md text-white font-bold p-2 cursor-pointer hover:bg-green-700 transform active:bg-green-500" type="submit"/>
        </form>
      </div>
    </>
  );
}
