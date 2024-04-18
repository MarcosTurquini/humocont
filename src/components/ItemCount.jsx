
export default function ItemCount({contador, incrementar,decrementar, agregarAlCarrito}) {

    
    return (
        <>
        <div className="flex gap-2 justify-center   items-center p-1">
            <button className="rounded-md bg-blue-500 p-2" onClick={decrementar}>-</button>
            <p className="p-2">{contador}</p>
            <button className="rounded-md bg-blue-500 p-2" onClick={incrementar}>+</button>
        </div>
        <div className="flex justify-center">
            <button className="rounded-md bg-blue-500 p-2" onClick={agregarAlCarrito} >Agregar al Carrito</button>
        </div>
        
        </>
    );
}