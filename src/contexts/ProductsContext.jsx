// ProductContext.js
import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const viewProduct = (id) => {
    const data = products.filter(product => product.id === id)[0] || null;
    console.log(data)
    setSelectedProduct(data)
  }

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch('/data/products.json')
        const { products } = await response.json()
        setProducts(products)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchFunction()
    }, []);

  return (
    <ProductContext.Provider value={
      { products, selectedProduct, viewProduct, setSelectedProduct }
    }>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
