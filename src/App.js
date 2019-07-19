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
    // get list of people form db
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

  MakePerson = (person) => {
    fetch("http://localhost:3000/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(person)
    })
    .then(resp => resp.json())
    .then(person => {
      this.setState({
        people: [...this.state.people, person],
        selectedPerson: person
      })
    })
  }

  deletePerson = (id) => {
    fetch(`http://localhost:3000/people/${id}`, {
      method: "DELETE"
    })
    let updated = this.state.people.filter(person => person.id !== parseInt(id))
    this.setState({
      people: updated,
      selectedPerson: {}
    })
  }

  render() {

    return (
      <Fragment>
        <Topbar person={this.state.selectedPerson} MakePerson={this.MakePerson}/>
        <Sidebar data={this.state.people} getPerson={this.setSinglePerson}/>
        <ShowPanel person={this.state.selectedPerson} deletePerson={this.deletePerson}/>
      </Fragment>
    )
  }
}
