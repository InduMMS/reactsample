import React, { Component } from 'react';

/*  <SetupPanel     qcolor = {this.state.STYLE.userColor}     class={this.state.CLASS} 
                    myDataProp = {this.state.data}    updateStateProp = {this.updateState}    data={this.state}/>*/

class SetupPanel extends Component {
  constructor(props) {
    super(props);
    this.handleAdminClick = this.handleAdminClick.bind(this);
    this.handleOfficialClick = this.handleOfficialClick.bind(this);
  }
  handleAdminClick() {
    this.props.updateState("ADMIN", !this.props.data.adminData2.isAdmin);            
  }
 
  handleOfficialClick() {
    this.props.updateState("OFFICIAL", !this.props.data.adminData2.isOfficial);            
  }

  render() {
    return (
      <div className="panel panel-success" >
        <div style={this.props.qcolor} className="panel-heading" data-toggle="collapse" data-target="#setupBody">
          <h4>Setup</h4></div>
          <div className="panel-body" id="setupBody"  className="collapse">Configure and Setup
            <div>
              Admin: <input type="checkbox"  onChange={this.handleAdminClick} checked={this.props.data.adminData2.isAdmin}/>
              Official: <input type="checkbox"  onChange={this.handleOfficialClick} checked={this.props.data.adminData2.isOfficial}/>

            </div>          
          </div>
      </div>
    );
  }
}


export default SetupPanel;

              {/*
              <button onClick={this.handleAdminClick}>
                ADMIN: {this.props.data.adminData2.isAdmin ? 'ON' : 'OFF'}
              </button>
              <button onClick={this.handleOfficialClick}>
                Official: {this.props.data.adminData2.isOfficial ? 'ON' : 'OFF'}
              </button>
              */}
