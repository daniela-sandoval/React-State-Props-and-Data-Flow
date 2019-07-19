import React, { Component } from "react";


class Sidebar extends Component {

  render() {

    const peopleNames = this.props.data.map(person => {
      return (
        <li onClick={this.props.getPerson} className="sidebar-li" id={person.id} key={person.id}>{person.name}</li>
      )
    })

    return (
      <ul className="sidebar-ul">
        {peopleNames}
      </ul>
    );
  }

}

export default Sidebar;
