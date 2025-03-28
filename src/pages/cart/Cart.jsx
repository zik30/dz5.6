import React from 'react'
import { useStoreProduct } from '../../feautures/store'
import CardComp from '../../components/cardComp/CardComp'
import stl from './cart.module.scss'
function Cart() {

  const { cart } = useStoreProduct()

  return (
    <div className={stl.cart}>
      <h2>My Cart</h2>
      <div className={stl.myCart}>
      {
        cart.map((product) => <CardComp product={product} page="cart"/>)
      }
      </div>
    </div>
  )
}

export default Cart