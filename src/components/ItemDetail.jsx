import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";


export default function ItemDetail ({item}) {

    const {carrito, agregarAlCarrito} = useContext (CartContext)
    
    

    const [contador, setContador] = useState(1);

    const decrementar = () => {
        contador > 1 && setContador(contador -1);
        
    };

    const incrementar = () => {
        contador < item.stock && setContador (contador +1)
    };

    

    return (
    <>
        <section className='flex flex-col justify-center items-center p-2'>
        <div className='flex flex-col items-center rounded-sm gap-2 shadow-lg max-w-80 bg-amber-200  p-3  text-center'>
        <h3 className='font-bold'>''{item.titulo}''</h3>
        <img className='w-40' src={item.img} alt={item.titulo} />
        <p className='font-bold'>Autor: {item.autor}.</p>
        <p className='font-bold capitalize'>Categoria: {item.categoria}.</p>
        <p className='font-bold'>Año: {item.año}.</p>
        <p className='font-bold'>Descripcion: {item.descripcion}</p>
        <p className='font-bold'>Precio: ${item.precio}</p> 
        <p className='font-bold'>Stock:{item.stock}</p>
        <ItemCount contador ={contador} decrementar={decrementar} incrementar={incrementar} 
                            agregarAlCarrito={() => {agregarAlCarrito  (item, contador )}}/>
        </div>
        
        </section>
    </>
    )
}