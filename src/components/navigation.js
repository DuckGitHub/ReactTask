import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          { this.props.title } // me lo manda el padre como parametro/propiedad "props"
        </a>
      </nav>
    );
  }
}

export default Navigation;
