import styled from 'styled-components'
import Header from '../components/homeHeader'

const Container = styled.div`
text-align: center;
background-color: black;
min-height: 100vh;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: space-between;
flex-direction: column;
align-items: center;
`

function MainLayout(props) {
    return (
        <Container>
            <Header />
            {props.children}
        </Container>
    );
}

export default MainLayout;