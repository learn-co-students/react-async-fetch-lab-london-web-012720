import React, { Component } from 'react';

class App extends Component {
    state = { data: "" }


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(newData => this.setState({ data: newData })
            )

    }

    displayPeople = () => {
        return this.state.data.map(each => (<p>{each.name}</p>))
    }

    render() {
        return (<div> {this.data != "" ? false : this.displayPeople()}</div>
        );
    }
}


export default App;