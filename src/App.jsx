import { useState, useEffect, useCallback } from 'react'
import './App.css'

function debounce(func, delay = 300) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback((query) => {
    fetch(`http://localhost:3333/products?search=${query}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error))
  }, []);

  const fetchDebouncedProducts = useCallback(
    debounce(fetchProducts, 300),
    []
  );

  useEffect(() => {
    fetchDebouncedProducts(search)
  }, [search]);

  console.log(products);

  return (
    <>
      <div className="autocomplete">
        <h2 className="autocomplete-title">SEARCH PRODUCTS</h2>
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
