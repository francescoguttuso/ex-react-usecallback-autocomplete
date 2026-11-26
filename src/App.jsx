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
  console.log(products)
  return (
    <>
      <input type="text"
        value={search}
        onChange={e => setSearch(e.target.value)} />
      <p>{search}</p>
    </>
  )
}

export default App
