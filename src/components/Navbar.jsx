import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

export default function Navbar () {

    return (
        <nav className="flex justify-around p-2  bg-gray-600">
            <Link to={`/`} className=' text-red-400 font-bold text-base lg:text-3xl'> Humo Contenmporaneo </Link>
            <ul className="flex gap-2 lg:gap-9">
                <li><Link  to={`/productos`} className=' text-white font-bold text-base lg:text-3xl'> Productos </Link></li>
                <li><Link  to={`/contacto`} className=' text-white font-bold text-base lg:text-3xl'> Contacto  </Link></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )


}