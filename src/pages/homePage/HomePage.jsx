import { Select, Slider } from 'antd'
import React, { useEffect, useState } from 'react'
import { useProducts } from '../../api/request'
import CardComp from '../../components/cardComp/CardComp'
import stl from './homePage.module.scss'
import { useStoreProduct } from '../../feautures/store'

function HomePage() {

    const { data, isLoading, error} = useProducts()
    const [ type, setType ] = useState('price')
    const [ range, setRange ] = useState([50,200])

    const { products, setProducts} = useStoreProduct()
    useEffect( ()=>{
      if(data){
        setProducts(data.products)
      }
      
    }, [data])

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error404...</p>

    
    const handleChange = value => {
      console.log(`selected ${value}`);
      setType(value)
    };

    const onChange = checked => {
      setRange(checked)
    };

  return (
    <div className={stl.homePage}>
        <h2>Home Page</h2>
        <Slider range min={0} max={type === 'price' ? '500' : '5'} defaultValue={ type === 'price' ? [50,200]: [0,5]} onChange={onChange}/>
        
        
        <Select onChange={handleChange} defaultValue='price' options={[{label: 'price',  value: "price"}, {label: 'rating', value: "rating" }]}/>
        <div className={stl.products}>
            {
                products.map( (product, i ) => {
                  switch (type){
                    case "price":
                      if( product.price < range[1] && product.price > range[0]) return <CardComp product={product} page='home'/>
                      break;
                    case "rating":
                      if (product.rating>range[0] && product.rating < range[1]) return <CardComp product={product} page='home'/>
                      break;
                    default:
                      return <CardComp product={product} page='home' />
                  }
              })
            }

        </div>
    </div>
  )
}

export default HomePage