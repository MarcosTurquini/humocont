import { useEffect, useRef, useState } from "react"
import { carrousel } from "../carrousel";

export default function CarrouselComponent () {

    const listRef = useRef ();
    
    const [currentIndex, setCurrentIndex] = useState ();


    useEffect (()=> {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll ("li > img")[currentIndex];

        
        
        if (imgNode) {
            imgNode.scrollIntoView ({
                behavior: "smooth"
            })
        }
    },[currentIndex]);

    const slide = (slideIndex) => {
        setCurrentIndex (slideIndex);
    }

    return (
        <>
           <section className="max-w-[900px] m-auto  h-72  p-2">
            <div className=" h-full">
                
                <div className="w-full h-full  overflow-hidden">
                   <ul ref={listRef}>
                    {
                      carrousel.map ((img)=> {
                        return <li key={img.id}>
                        <img className=" w-full h-72 mt-4" src= {img.img}/>
                       </li> 
                      })
                    }
                   </ul>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    carrousel.map ((_,idx) => (
                    <div key={idx} className="mx-2 my-1 cursor-pointer text-lg text-center"
                         onClick={()=> slide (idx)}>
                        &#9865;
                    </div>))
                }
            </div>
            

           </section>
        </>
    )
}