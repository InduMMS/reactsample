import React, { Component } from 'react';

class AdminBoxes extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("INDU DIV clicked with" +  this.props.clickLabel);
    //this.props.updateStateProp("DATATEXT", this.props.clickLabel );            
  }

  render() {
    return (
      <div className="panel panel-primary" >
        <div className="panel-heading" >
          <h4>{this.props.headerContent}</h4></div>
        <div className="panel-body" >{this.props.bodyContent}
          <button onClick={this.handleClick()}>
                WorkArea: {this.props.clickLabel} _ {this.props.myDataProp.datatext.workarea }
          </button>
        </div>
      </div>
    );
  }
}

// /

export default AdminBoxes;
