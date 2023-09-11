
import useCartContext from '../hooks/useCartContext'
import { useProductContext } from '../hooks/useProductsContext'
import styles from './ProductDetails.module.css'
import { BsXOctagonFill } from 'react-icons/bs'

const ProductDetails = () => {
  const { selectedProduct, setSelectedProduct } = useProductContext()
  const { addToCart } = useCartContext()

  const { id, title, price, thumbail, flavors, brand, ml} = selectedProduct

  const addProduct = (flavor) => {
    const product = {
      id: `${id}-${flavor||null}`,
      title,
      price,
      thumbail,
      flavor
    }
    addToCart(product)
  }

  return (
    <div className={styles.container}>
      <section className={styles.productDetails}>
        <BsXOctagonFill
          className={styles.close}
          onClick={() => setSelectedProduct(null)}
        />
        
        <img src={thumbail} alt={title} />
        
        <article className={styles.details}>
          <header>
            <h3 className={styles.title}>{ title }</h3>
            <span className={styles.price}>${ price }</span>
          </header>
          
          <div>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate odit iusto aliquid, veritatis omnis vero cum magni saepe. Omnis aliquid repellendus laudantium itaque commodi voluptates obcaecati reiciendis blanditiis perferendis doloribus, quis hic cum, eos eaque pariatur non, assumenda quibusdam.
            </p>

            <ul className={styles.features}>
              { brand && <li>Marca: { brand }</li>}
              { ml && <li>Contenido: { ml }ml</li>}
            </ul>
          </div>
        </article>

        <article className={styles.flavors}>
          {
            flavors ? (
              flavors.map(flavor => (
                <div
                  key={flavor}
                  className={styles.flavor}
                >
                  <button onClick={() => addProduct(flavor)}>Agregar al carrito</button>
                  <span>{ flavor }</span>
                </div>
              )) 
            ) : (
              <div className={styles.flavor} style={{'justifyContent': 'center'}}>
                <button onClick={() => addProduct()}>Comprar</button>
              </div>
            )
          }
        </article>
      </section>
    </div>
  )
}

export default ProductDetails