import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

export default function Carrito () {

    const {carrito, precioFinal, vaciarCarrito} = useContext(CartContext);

    const botonVaciar = () => {
        vaciarCarrito ();
        Swal.fire({
            title: "😭😭😭",
            text: "Productos Eliminados",
            imageUrl: "https://i.pinimg.com/564x/76/22/cf/7622cfb86320e9d922e4c1f4a22d07d4.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }

    return (
        <>
        <div className="min-h-svh">
            <h1 className="text-center capitalize font-bold  text-3xl p-11">carrito de compras</h1>
            {
                carrito.map ((prod) => (
                    
                    <div className="flex flex-col justify-center items-center p-2 m-1 sm:grid grid-cols-5 gap-2 bg-amber-200 " key={prod.id}>
                        <img className="w-40" src={prod.img} alt="" />
                        <h3 className="font-bold">{prod.titulo}</h3>
                        <p className="font-bold">Cantidad: {prod.contador}</p>
                        <p className="font-bold">Precio unitario: ${prod.precio}</p>
                        <p className="font-bold">Precio total: ${prod.precio*prod.contador}</p>
                    </div>
                ))
            }
            {   carrito.length > 0 ? 
                <>
                <h2 className="text-center font-bold p-2">Precio Final: ${precioFinal()} </h2>
                <button className="flex px-6 text-white m-auto font-bold p-2 rounded-md bg-blue-500 hover:bg-blue-700 transform" onClick={botonVaciar}>Eliminar productos</button>
                <button className="flex m-auto"><Link to = "/checkout" className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Finalizar Compra</Link></button>
                </> :
                <h2 className="flex gap-2 justify-center p-4 text-3xl">El carrito esta vacio <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
              </svg>  </h2>
            }
            
        </div>
        </>
    )
}