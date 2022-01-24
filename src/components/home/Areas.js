import '../../App.scss';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Areas from '../AreaComponent';
import Spinner from '../spinner';

function App() {
  
  const [areas, setAreas] = useState([])

  const [showSpinner, setSpinner] = useState(true)

  useEffect(() => {

    const getData = async () => {

      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

      console.log('response is', response.data)


      setTimeout(() => {
        setAreas([...response.data.meals])
        setSpinner(false)
      })
      
    }

    getData()
  }, [])
  
  // console.log('before render: cats is', cats)
  return (
    <div className="App">
      <h1>Choose your Cuisine</h1>
      {showSpinner ? <Spinner /> : <Areas cats={areas}/>}
    </div>
  );
}

export default App;
