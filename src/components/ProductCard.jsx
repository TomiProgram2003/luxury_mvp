
import { useProductContext } from '../hooks/useProductsContext'
import styles from './ProductCard.module.css'

const ProductCard = ({ title, price, thumbail, id }) => {

  const { viewProduct } = useProductContext()

  return (
    <article
      className={styles.productCard}
      onClick={() => viewProduct(id)}
    >
      <img src={thumbail} alt={title} />
      <h3>{ title }</h3>
      <span>${ price }</span>
    </article>
  )
}

export default ProductCard