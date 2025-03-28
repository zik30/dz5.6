import React from 'react'
import { useStoreProduct } from '../../feautures/store'
import CardComp from '../../components/cardComp/CardComp'
import stl from '../cart/cart.module.scss'
function Favourites() {

  const { favourites } = useStoreProduct()

  console.log(favourites);
  

  return (
    <div className={stl.cart}>
      <h2>My Favourites</h2>
      <div className={stl.myCart}>
      {
        favourites.map((product) => <CardComp product={product} page='fav'/>)
      }
      </div>
    </div>
  )
}

export default Favourites