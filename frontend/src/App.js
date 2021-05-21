import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
        console.log(this)
    }

    render() {
        return (
            <div>
                <p>Main App</p>
            </div>
        )
    }

}

export default App;
