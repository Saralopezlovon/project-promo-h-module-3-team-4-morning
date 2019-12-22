import React from "react";
// import "../stylesheets/mainStyle.scss";

class MenuItem extends React.Component {
  render() {
    return (
      <li className="menu__item">
        <i className={this.props.menuIcon}></i>
        <h3 className="menu__item--text">{this.props.text}</h3>
      </li>
    );
  }
}

export default MenuItem;