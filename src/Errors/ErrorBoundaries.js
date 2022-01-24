import {Component} from 'react'
import ErrorComponent from './ErrorComponent';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        error: null, 
        errorInfo: null,

    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? <ErrorComponent text='This all we know'/>: this.props.children
            
        
    }
}