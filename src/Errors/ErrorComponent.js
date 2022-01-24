import { Component } from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`

    display: grid;
    place-content: center;
    min-height: 100vh;
`

export default class ErrorComponent extends Component {

    render() {

    return <ErrorContainer>
            <h1>Oops Something went wrong!</h1> 
            <h2>{this.props.text}</h2>
            <a href="/">Go back</a>
        </ErrorContainer>
    }
}