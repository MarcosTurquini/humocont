import React from "react";

import { Link } from "react-router-dom";

export default function Item ({producto}) {

    return (
        <>
           <article key={producto.id} className="flex flex-col shadow-lg max-w-80 max-h-[600px] rounded-sm bg-red-500  p-3  text-center">
                <h2 className='h-[20%] m-auto text-center items-center flex font-bold'>"{producto.titulo}"</h2>
                <img className='h-[80%] ' src={producto.img} alt={producto.titulo}/>
                <p className='font-bold p-4'> ${producto.precio}</p>
                <Link to={`/item/${producto.id}`}className='font-bold bg-gray-600 text-white rounded-xl  p-2 m-auto hover:bg-green-700 transform active:bg-green-500'
                 >Ver detalles</Link>
                
            </article>
        </>        
    )

}