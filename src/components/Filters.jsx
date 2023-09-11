
import { useId } from 'react'
import styles from './Filters.module.css'

const Filters = () => {

  const inputBrandId = useId()
  const inputOrderId = useId()

  return (
    <section className={styles.filters}>
      <div className={styles.container}>
        <label htmlFor={inputBrandId}>
          Marca
        </label>
        <select id={inputBrandId}>
          <option value='all'>Todas</option>
          <option value='supreme'>Supreme</option>
          <option value='torch'>Torch</option>
        </select>
      </div>

      <div className={styles.container}>
        <label htmlFor={inputOrderId}>Ordenar</label>
        <select id={inputOrderId}>
          <option value='default'>Mas relevantes</option>
          <option value='minMax'>Menor a mayor precio</option>
          <option value='maxMin'>Mayor a menor precio</option>
        </select>
      </div>
    </section>
  )
}

export default Filters