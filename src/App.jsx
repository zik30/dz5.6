
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import Cart from './pages/cart/Cart'
import Favourites from './pages/favourites/Favourites'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
