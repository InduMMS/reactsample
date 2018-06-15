import React, { Component } from 'react';


class UserPanel extends Component {
    render() {
      return (
        <div className="panel panel-info">
          <div style={this.props.qcolor} className="panel-heading" data-toggle="collapse" data-target="#userBody"><h4>User</h4></div>
          <div className="panel-body" id="userBody"  className="collapse">Panel Content </div>
        </div>
      );
    }
  }



export default UserPanel;
