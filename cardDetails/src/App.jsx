import { useEffect, useState } from 'react'

import './App.css'
import Card from './Component/Card'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((result) => setData(result))
    }
    fetchData()
  }, [])

  console.log('data', data);

  return (
    <div className='card-container'>
      {data.map((item) =>
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />)}

    </div>
  )
}

export default App
