
import { useProductContext } from '../hooks/useProductsContext'
import styles from './ProductList.module.css'
import ProductCard from './ProductCard'


const ProductList = () => {
  const { products } = useProductContext()

  return (
    <section className={styles.productList}>
      <div className={styles.container}>
        { products.map(product => (
          <ProductCard
            key={product.id}
            { ...product }
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList