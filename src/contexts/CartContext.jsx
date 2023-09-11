
import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [productsCart, setProductCart] = useState([])

  const addToCart = (product) => {
    const newCart = structuredClone(productsCart)
    const index = newCart.findIndex(element => (element.id === product.id))
    
    if (index !== -1) newCart[index].quantity += 1
    else newCart.push({ ...product, quantity:1 })

    setProductCart(newCart)
  }

  const changeQuantity = (id, quantity) => {
    const newCart = structuredClone(productsCart)
    const index = newCart.findIndex(element => (element.id === id))
    
    if (index !== -1) { 
      newCart[index] = { ...newCart[index], quantity }
      console.log(newCart[index].quantity)
      setProductCart(newCart)
    }
  }

  const getProduct = (id) => {
    const index = productsCart.findIndex(product => (product.id === id))
    if (index !== -1) return productsCart[index]
  }

  const removeProduct = (id) => {
    const newCart = productsCart.filter(product => (product.id !== id))
    setProductCart(newCart)
  }

  return (
    <CartContext.Provider
      value={
        {
          productsCart,
          setProductCart,
          addToCart,
          changeQuantity,
          getProduct,
          removeProduct
        }
      }
    >
      { children }
    </CartContext.Provider>
  )
}