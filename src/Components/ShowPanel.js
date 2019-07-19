import React, { Component } from "react";

class ShowPanel extends Component {

  handleClick = (e) => {
    this.props.deletePerson(e.target.id)
  }

  render() {
    let panel;

    if(this.props.person[0]) {
      panel = <div id="show-panel">
        <button onClick={this.handleClick} className="delete-button" id={this.props.person[0].id}> Delete </button>
        <img className="show-image" src={this.props.person[0].img_url} alt="person" />
        <h1>{this.props.person[0].name}</h1>
        <span>{this.props.person[0].bio}</span>
      </div>
    } else {
      panel = <div id="show-panel">
        Explore the sidebar!
      </div>
    }

    return panel
  }

}

export default ShowPanel;
