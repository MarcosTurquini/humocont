import Item  from "./Item"

export default function ItemList ({productos, seccion}) {

    
    return (
        <>
        
        <div className='flex flex-col justify-between pb-12 ' >

            <h1 className="text-center capitalize font-bold  text-3xl p-3">{seccion}</h1>
                <div className="grid grid-cols-2 p-2 gap-2 m-auto justify-center lg:grid-cols-4 lg:gap-10">
                {
                
                productos.map ((producto) => {
                    
                    return (
                            <Item key={producto.id} producto={producto}/>
                    )
                }) 
                }
                </div>
        </div>
        </>
    )


}