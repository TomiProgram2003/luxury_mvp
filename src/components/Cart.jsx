
import styles from './Cart.module.css'
import CartElement from './CartElement'
import { BsFillCartFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import useCartContext from '../hooks/useCartContext';
import { useEffect, useId, useState } from 'react';

const Cart = () => {

  const checkboxId = useId()

  const [total, setTotal] = useState(0)

  const { productsCart } = useCartContext()

  useEffect(() => {
    setTotal(
      productsCart.reduce(
        (prev, next) => {
          return prev + (next.price * next.quantity)
        }, 0
      )
    )
  }, [productsCart])

  return (
    <>
      <label
        className={styles.openCartLabel}
        htmlFor={checkboxId}
      >
        <BsFillCartFill />
      </label>

      <input
        id={checkboxId}
        className={styles.openCartInput}
        type='checkbox'
        hidden
      />

    <section className={styles.cart}>
      <label htmlFor={checkboxId}>
        <BsFillArrowRightCircleFill />
      </label>

      <div className={styles.container}>
        {
          productsCart.length
          ? productsCart.map(product => <CartElement key={product.id} { ...product } />)
          : null
        }
      </div>
      
      <footer>
        <span>TOTAL: <b>${ total }</b></span>
        <button>TERMINAR COMPRA</button>
      </footer>
    </section>
    </>
  )
}

export default Cart