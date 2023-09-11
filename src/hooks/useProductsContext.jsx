import { useContext } from "react"
import ProductContext from "../contexts/ProductsContext"

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error('ERROR - llamada fuera del contexto')
  return context
}