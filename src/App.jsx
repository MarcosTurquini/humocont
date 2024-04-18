import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Contacto from './components/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Carrito from './components/Carrito'
import { CartProvider} from './context/CartContext'
import Checkout from "./components/Checkout"
import Footer from "./components/Footer"



function App() {
  
  
  return (

    <>
      <CartProvider>
      <BrowserRouter>
          <Navbar/>
              <Routes> 
                  <Route path="/" element={<Home/>}/>
                  <Route path="/productos" element= {<ItemListContainer/>}/>
                  <Route path="/item/:id" element= {<ItemDetailContainer/>}/>
                  <Route path="productos/:categoria" element={<ItemListContainer/>} />
                  <Route path="/contacto" element= {<Contacto/>}/>
                  <Route path="/carrito" element= {<Carrito/>}/>
                  <Route path="/checkout" element = {<Checkout/>}/>
              </Routes>
              <Footer/>
        </BrowserRouter>
        
        </CartProvider>
        
    </>
  )
}

export default App
