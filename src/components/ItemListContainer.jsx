import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase/config"

export default function ItemListContainer (){

    const [productos, setProductos] = useState ([]);
    
    const [seccion, setSeccion] = useState ("Nuestros Productos");
    
    const categoria = useParams ().categoria;
    
    
        useEffect (()=> {

            const productosRef = collection (db, "productos");

            const filtro = categoria ? query (productosRef, where ("categoria", "==", categoria)) : productosRef;


            getDocs(filtro)
                .then ((resp) => {

                    setProductos (
                        resp.docs.map ((doc) => {
                            return {...doc.data(), id: doc.id}
                        })
                    )

                })
        
    },[categoria])

    return (
        <div >
            <div className="flex flex-col m-auto items-center justify-center p-5 lg:flex-row text-center">
                <Link to={'/productos/Pods'} className="w-48 rounded-md bg-red-500 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Pods</Link>
                <Link to={'/productos/Kits'} className="w-48 rounded-md bg-red-500 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Kits</Link>
                <Link to={'/productos/E-Liquids'} className="w-48 rounded-md bg-red-500 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">E-Liquids</Link>
                <Link to={'/productos/Sales-Nicotina'} className="w-48 rounded-md bg-red-500 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Sales-Nicotina</Link>
                <Link to={'/productos/Resistencias'} className="w-48 rounded-md bg-red-500 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Resistencias</Link>
            </div>
            <div>
                <ItemList productos={productos} seccion={seccion}/>   
            </div>
        </div>
    )

}