import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function CartWidget () {

    const {numeroCarrito} = useContext (CartContext)

    return(
        <>

          <div>
            <Link to={"/carrito"} className="flex   bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="25" className="m-auto bi bi-cart-fill" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span className=' text-white font-bold lg:text-3xl'> {numeroCarrito ()} </span>
              </Link>
          </div>
            
        </>
        )
}