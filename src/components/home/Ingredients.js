import {useEffect, useState} from 'react'
import axios from 'axios'
import Ingredients from '../categories/IngCat';
import Spinner from '../spinner';

function App() {
  
  const [ings, setIngs] = useState([])

  const [showSpinner, setSpinner] = useState(true)

  useEffect(() => {

    const getData = async () => {

      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');

      console.log('response is', response.data.meals, typeof response.data)


      setTimeout(() => {
        setIngs([...response.data.meals])
        setSpinner(false)
      })
      
    }

    getData()
  }, [])
  
  // console.log('before render: cats is', cats)
  return (
    <div className="App">
      <h1>Choose your Ingredient</h1>
      {showSpinner ? <Spinner /> : <Ingredients cats={ings}/>}
    </div>
  );
}

export default App;
