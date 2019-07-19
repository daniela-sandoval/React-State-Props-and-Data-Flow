import React, { Component } from "react";

class ShowPanel extends Component {
  render() {
    return (
    // If there is no person selected from the sidebar this component should render an empty div with the id "show-panel", else it should render the format below with the selected person's info
    <div id="show-panel">
      <button className="delete-button"> Delete </button>
      <img className="show-image" src="" alt="" />
      <h1>{this.props.person.name}</h1>
      <span>The person's bio should REPLACE this span tag</span>
    </div>
    )
  }
}

export default ShowPanel;
