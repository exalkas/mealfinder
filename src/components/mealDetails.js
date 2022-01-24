import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from "react";
import Footer from './footer'
import styled from 'styled-components'

const H2 = styled.h2`

    width: 100%;
    margin-top: 20px;
    text-align: ${props => props.align};
    padding-left: ${props => props.padl || 0}
`
const Instructions = styled.div`

width: 100%;
font-style: italic;
padding: 20px 30px;
line-height: 30px;
`

const TopContainer = styled.div`
    display: flex;
    padding: 10px;
`
const Image = styled.img`
    flex-grow:1;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    
`
const Ingredients = styled.div`
    flex-grow:1;
    width: 100%;
    height: 300px;
    padding-left: 30px; 
    padding-top: 30px; 
`

export default function MealDetails() {

    const {id} = useParams();
    const [details, setDetails] = useState({})

    const [ingredients, setIngredients] = useState([])
    const [measures, setMeasures] = useState([])

    useEffect(() => {

        const getData = async () => {

            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)

            console.log('Meal details: response is', response)
            setDetails({...response.data.meals[0]})

            const recipe = Object.entries(response.data.meals[0])

            setIngredients([...recipe.filter(item => item[0].includes('strIngredient') && item[1])])
            setMeasures([...recipe.filter(item => item[0].includes('strMeasure') && item[1])])

            console.log('recipe is', )
        }

        getData();
    }, [id])

    return <>
        <H2 align='center'>{details.strMeal}</H2>
        <TopContainer>
            <Image src={details.strMealThumb}/>
           

            <Ingredients>
            {
                ingredients.length && measures.length ?
                ingredients.map((item, index) => <div key={index}>{measures[index][1]} - {item[1]}</div>)
                : null
            }
            </Ingredients>
        </TopContainer>
        <H2 align='left' padl = '20px'>Instructions</H2>
        <Instructions>
            {details.strInstructions}
        </Instructions>
        <Footer />
    </>
}