import { Button, Card, Image } from 'antd'
import React, { useState } from 'react'
import stl from './cardComp.module.scss'
import { HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useStoreProduct } from '../../feautures/store';

function CardComp({product, page}) {

    const { addToCart, removeFromCart} = useStoreProduct()
    const { addToFavourites, removeFromFavourites} = useStoreProduct()
    

    const changeCart = ()=>{
        console.log(123);
        
        !product.inCart ? addToCart({...product, "inCart": true}) : removeFromCart(product.id)    
    }

    const changeFavourites = ()=>{
        !product.inFav ? addToFavourites({...product, "inFav": true}) : removeFromFavourites(product.id)        
    }
    console.log(page);
    

  return (
    <div>
        <Card className={stl.card} title={product.title} cover={<Image src={product.thumbnail} alt={product.title}/>}>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <div className={stl.buttons}>
                <Button onClick={changeCart}> <ShoppingCartOutlined style={(page === 'home' && product.inCart ) ? {color: "blue"} : (page === 'cart') ? {color: 'green'} : (page === 'fav' && product.inCart) ? {color: 'red'} : {}}  /> </Button>
                <Button onClick={changeFavourites}> {!product.inFav ? (<HeartOutlined />) : (<HeartFilled style={(page === 'home' && product.inFav ) ? {color: "blue"} : (page === 'fav') ? {color: 'green'} : (page === 'cart' && product.inFav) ? {color: 'red'} : {}} />) }</Button>
            </div>
        </Card>
    </div>
  )
}

export default CardComp