import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useStoreProduct = create( (set) =>({
    products: [],
    cart: [],
    favourites: [],
    setProducts: (products) => set ( (state) =>({
      products: products.map((product) => { return {...product, "inCart": false, "inFav": false}})
    })),
     addToCart: (productNew) => set((state)=>({ 
         cart: [...state.cart, productNew],
         products: state.products.map((product) =>product.id === productNew.id ? {...product, inCart: true} : product),
         favourites: state.favourites.map((p) =>p.id === productNew.id ? {...p, inCart: true} : p)
      })),
     removeFromCart: (id) => set( (state) =>({
         cart: state.cart.filter( (product) => product.id !== id),
         products: state.products.map( (p) => p.id === id ? {...p, inCart: false} : p),
         favourites: state.favourites.map( (p) => p.id === id ? {...p, inCart: false} : p)
      })),
      addToFavourites: (product) => set( (state) => ({
        favourites: [ ...state.favourites, product],
        products: state.products.map((p) =>p.id === product.id ? {...p, inFav: true} : p),
        cart: state.cart.map((p) =>p.id === product.id ? {...p, inFav: true} : p)
      })),
      removeFromFavourites: (id) =>set( (state) => ({
        favourites: state.favourites.filter( (product) => product.id !== id),
        products: state.products.map( (p) => p.id === id ? {...p, inFav: false} : p),
        cart: state.cart.map( (p) => p.id === id ? {...p, inFav: false} : p)
      }))
    }))