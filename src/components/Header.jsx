import { Flex } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{height: 70, display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: "blue"}}>
        <h2 style={{color: 'white', fontSize: 40}}>ProductsBuy</h2>
        <div style={{display: 'flex', gap: 20, fontSize: 16, color: 'white'}}>
            <Link style={{fontSize: 20, color: 'white'}} to="/cart">
                <p>Cart</p>
            </Link>
            <Link style={{fontSize: 20, color: 'white'}} to="/favourites">
                <p>Fav</p>
            </Link>
        </div>
    </div>
  )
}

export default Header