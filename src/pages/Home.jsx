
import Filters from '../components/Filters'
import ProductDetails from '../components/ProductDetails'
import ProductList from '../components/ProductList'
import { useProductContext } from '../hooks/useProductsContext'
import styles from './Home.module.css'

const Home = () => {
  
  const { selectedProduct } = useProductContext()

  return (
    <>
      {
        selectedProduct && <ProductDetails />
      }
      <main className={styles.home}>
        <div className={styles.logoContainer}>
          <h1 className={styles.neonText}>
            Luxury Vapes
          </h1>
        </div>

        <Filters />
        <ProductList />
      </main>
    </>
  )
}

export default Home