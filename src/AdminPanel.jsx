import React, { Component } from 'react';
import AdminBoxes from  "./AdminBoxes";

/*
  <AdminPanel     qcolor = {this.state.STYLE.adminColor}    layout={this.state.LAYOUT}    
                  class={this.state.CLASS}        myDataProp = {this.state.adminData}/>
*/

class AdminPanel extends Component {
  render() {
    return (
      <div className="panel panel-success" >
        <div style={this.props.qcolor} className="panel-heading" data-toggle="collapse" data-target="#adminBody">
          <h4>Administration</h4>
        </div>
        <div className="panel-body" id="adminBody"  className="collapse">
          <h3>Panel Content</h3> 

          {this.props.myDataProp.adminData2.adminData.map(
            (dynamicComponent, i) => 
              <div key = {i} style={this.props.layout.box}>
                <AdminBoxes  headerContent={dynamicComponent.component} clickLabel={"TIMBUKTOO"}
                      updateStateProp = {this.props.updateState} myDataProp = {this.props.myDataProp } bodyContent={dynamicComponent.component} key = {i} />
              </div>)}
        </div>
      </div>
    );
  }
}

export default AdminPanel;
