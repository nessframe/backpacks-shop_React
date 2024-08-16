import { useState } from 'react'
import './App.scss'
import Catalog from './components/catalog/Catalog.jsx'
import Filter from './components/filter/Filter.jsx'
import Header from './components/header/Header.jsx'
import Intro from './components/intro/Intro.jsx'
import Footer from './components/footer/Footer.jsx'
import Form from './components/UI/form/Form.jsx'

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Jolly Bag', body: 'description about this product', cost: 1080, currency: '$', img: 'joly-bag.webp'},
    {id: 2, title: 'Urban Plus', body: 'description about this product', cost: 830, currency: '$', img: 'joly-bag.webp'},
    {id: 3, title: 'Nicko Plus', body: 'description about this product', cost: 890, currency: '$', img: 'joly-bag.webp'},
    {id: 4, title: 'Sweet Bag', body: 'description about this product', cost: 490, currency: '$', img: 'joly-bag.webp'},
    {id: 5, title: 'Samurai Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-bag.webp'},
    {id: 6, title: 'Tripman Bag', body: 'description about this product', cost: 780, currency: '$', img: 'joly-bag.webp'},
  ])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  function products_500_1000() {
    setProducts(products.filter((p) => p.cost > 500 && p.cost < 1000))
  }



    return (
      <main className='App'>
            <Header 
              windowWidth={windowWidth}
            />
            <Intro />
            <Filter 
              
            />
            <Catalog 
              products={products}
            />
            <Footer 
              windowWidth={windowWidth}
            />
      </main>
    )
  }
  
export default App