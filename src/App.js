import React, { Component, Fragment } from "react";
import Topbar from './Components/Topbar'
import Sidebar from './Components/Sidebar'
import ShowPanel from './Components/ShowPanel'
import "./Stylesheets/style.scss";

export default class App extends Component {

  state = {
    people: [],
    selectedPerson: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/people")
    .then(resp => resp.json())
    .then(data => this.setState({people: data}))
  }

  setSinglePerson = (event) => {
  let found = this.state.people.filter(person => person.id === parseInt(event.target.id))
    this.setState({
      selectedPerson: found
    })
  }



  render() {

    return (
      <Fragment>
        <Topbar />
        <Sidebar data={this.state.people} getPerson={this.setSinglePerson}/>
        <ShowPanel person={this.state.selectedPerson}/>
      </Fragment>
    )
  }
}
