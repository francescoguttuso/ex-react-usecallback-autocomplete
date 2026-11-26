import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/products?search=${search}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error))
  }, [search]);

  console.log(products);

  return (
    <>
      <div className="autocomplete">
        <input
          className="autocomplete-input"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <ul className="autocomplete-list">
          {search && products.map(product => (
            <li
              className="autocomplete-item"
              key={product.id}
              onClick={() => setSearch(product.name)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
