// create your App component here

import React from 'react'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(json => 
            this.setState({peopleInSpace:json.people}))
    }


    render(){
        return <div>Hello!</div>
    }
}

export default App