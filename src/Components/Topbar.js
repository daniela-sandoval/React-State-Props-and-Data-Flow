import React, { Component } from "react";

export default class Topbar extends Component {

  state = {
    name: "",
    bio: "",
    img_url: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newPerson = this.state
    this.props.MakePerson(newPerson)
    e.target.reset()
  }

  render() {
    return (
      <div className="top-bar">
        <h1 className="top-bar-title">{this.props.person[0] ? this.props.person[0].name : ""}</h1>
        <h2>Add someone that inspires you!</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="name" type="text" placeholder="Name" />
          <input onChange={this.handleChange} name="bio" type="text" placeholder="Bio" />
          <input onChange={this.handleChange} name="img_url" type="text" placeholder="Img Url" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
