import React from 'react'
import { render } from 'enzyme'

export default class App extends React.Component{

  state = {
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        peopleInSpace: obj.people
      })
    })
  }


  render(){
    return(
    <div>
      {this.state.peopleInSpace.map((p, i)=> <p>{i+1} {p.name}</p>)}
    </div>
    )
  }
}