import Swal from "sweetalert2"
import { useEffect } from "react";
import { createContext,useState } from "react";

export const CartContext = createContext();

const memoria = JSON.parse (localStorage.getItem ("carrito")) || []

export const CartProvider = ({children})=> {
    const [carrito, setCarrito] = useState (memoria);

  const agregarAlCarrito = (item, contador) => { 

    const productoAgregado = {...item,contador}

    const nuevoCarrito = [...carrito];

    const estaEnCarrito = nuevoCarrito.find ((producto) => producto.id === productoAgregado.id);

    if (estaEnCarrito) {
        estaEnCarrito.contador += contador;
        
    } else {
        nuevoCarrito.push (productoAgregado);
    }
    setCarrito(nuevoCarrito);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Agregado al Carrito",
      showConfirmButton: false,
      timer: 1500
    });
    
    
}

  const numeroCarrito = () => {
    return carrito.reduce ((acc, prod) => acc + prod.contador, 0);
  }

  const precioFinal = ()=> {
    return carrito.reduce ((acc, prod)=> acc + prod.precio * prod.contador, 0)
    
  }

  const vaciarCarrito = () => {
    setCarrito([]);
    
}

 useEffect (()=>{
        localStorage.setItem ("carrito", JSON.stringify (carrito))

 },[carrito])

    return (<CartContext.Provider 
        value ={{carrito, agregarAlCarrito, numeroCarrito, precioFinal, vaciarCarrito}}>{children}
        </CartContext.Provider>
    )
}