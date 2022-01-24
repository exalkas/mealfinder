import {useEffect, useState} from 'react'
import axios from 'axios'
import Categories from '../categories/FoodCat';
import Spinner from '../spinner';

function App() {
  
  const [cats, setCats] = useState([])

  const [showSpinner, setSpinner] = useState(true)

  useEffect(() => {

    const getData = async () => {

      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

      console.log('response is', response.data.meals, typeof response.data)


      setTimeout(() => {
        setCats([...response.data.meals])
        setSpinner(false)
      })
      
    }

    getData()
  }, [])
  
  // console.log('before render: cats is', cats)
  return (
    <div className="App">
      <h1>Choose your food type</h1>
      {showSpinner ? <Spinner /> : <Categories cats={cats}/>}
    </div>
  );
}

export default App;
