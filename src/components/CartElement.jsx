
import { BsTrash } from 'react-icons/bs'
import useCartContext from '../hooks/useCartContext'
import styles from './CartElement.module.css'


const CartElement = ({ id }) => {

  const { getProduct, changeQuantity, removeProduct } = useCartContext()
  const { title, price, thumbail, quantity, flavor } = getProduct(id)

  const handleChangeQuantity = (e) => {
    const value = Number(e.target.value)
    if (value > 0) changeQuantity(id, value)
  }

  return (
    <article className={styles.element}>
      <BsTrash
        className={styles.trash}
        onClick={() => removeProduct(id)}
      />
      <div>
        <h4>
          <b>{ title }</b> <span>(${ price })</span> 
        </h4>
        {
          flavor && <span> Sabor <b>{flavor}</b> </span>
        }
        
      </div>
      
      <div>
        <span>
          CANTIDAD:
          <input
            id=""
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </span>
        <br />
        <span>
          Subtotal: <b>${ price * quantity }</b>
        </span>
      </div>
      
      <img src={thumbail} alt="product" />
    </article>
  )
}

export default CartElement