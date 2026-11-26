import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

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
