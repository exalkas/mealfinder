import { useParams, useHistory } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Footer from '../footer';

const CatComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 30px
`
const Image = styled.img`
    width: 100%;
    height:150px;
    place-content: center;
    border-radius: 4px;
    padding: 5px;
`
const Meal = styled.div`
    background: lightPink;
    color: black;
    width: 200px;
    height: 200px;
    margin: 10px;
    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;
    cursor: pointer
`
const Title = styled.p`
    text-align: center;
    padding: 0 10px;
`
export default function MealCat() {

    const history = useHistory();

    const {meal} = useParams();
    const [meals, setMeals] = useState([])

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + meal)
            console.log('reponse is', response)

            setMeals([...response.data.meals])
        }

        getData()
    }, [meal])

    const handleClick = id => history.push('/meals/' + meal + '/' + id)

    return <>
    <CatComponent>
        {
            meals.map((item, idx) => <Meal key={item.idMeal} className="mealCard" onClick={()=> handleClick(item.idMeal)}>
                <Image src={`${item.strMealThumb}/preview`} alt=''/>
                <Title>{item.strMeal}</Title>
            </Meal>)
        }
    </CatComponent>
    <Footer />
    </>
}