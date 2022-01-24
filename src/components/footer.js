import styled from 'styled-components';
import { useHistory } from "react-router-dom"

const FooterEl = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 30px 0;
`

const Button = styled.button`

background: red;
color: white;
width: 150px;
height: 40px;
border-radius: 10px;
margin: auto;
border: none;
cursor: pointer;
`

export default function Footer() {

    const history = useHistory();


const handleBack = () => history.goBack()
    return <FooterEl>
            <Button className="mealCard" onClick={handleBack}>back</Button>
        </FooterEl>
}