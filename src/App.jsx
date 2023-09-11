import './App.css'
import Cart from './components/Cart'
import { ProductProvider } from './contexts/ProductsContext'
import Home from './pages/Home'

function App() {
  return (
    <ProductProvider>
      <Home />
      <Cart />
    </ProductProvider>
  )
}

export default App
