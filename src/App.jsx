import React, { Component } from 'react';
import './App.css';
import SetupPanel from  "./SetupPanel";
import AdminPanel from  "./AdminPanel";
import UserPanel from  "./UserPanel";
import OfficialPanel from  "./OfficialPanel";
import STATE from "./State";
import {connect} from 'react-redux';
import {updateQuestion} from "./js/actions/questionPaper-action";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = STATE;
    this.onUpdateQuestion = this.onUpdateQuestion.bind(this);
  } // constructor

  onUpdateQuestion(){
    this.props.onUpdateQuestion("Sammy");
  }

  render() {
    console.log("INDU from render::" + this.props);
    return (
      <div className="container">
        <div className="row">
          <header >
              <h1 >Questionnaire Project</h1>
          </header>
        </div>
        <div className="row">
          <div className="col-lg-6">
              { this.state.adminData2.isAdmin ? 
                  <AdminPanel     qcolor = {this.state.STYLE.adminColor}  layout={this.state.LAYOUT} 
                      myDataProp = {this.state} updateState = {this.updateState}/>  : <div/>}
              { this.state.adminData2.isOfficial ? 
                  <OfficialPanel  qcolor = {this.state.STYLE.officialColor}  layout={this.state.LAYOUT} 
                      myDataProp = {this.state} updateState = {this.updateState}/> : <div/>}
              <UserPanel      qcolor = {this.state.STYLE.userColor}     />
              <SetupPanel     qcolor = {this.state.STYLE.userColor}     myDataProp = {this.state.data} updateState = {this.updateState} data={this.state}/>
              <div onClick={this.onUpdateQuestion}>Update Question</div>
              <div>INDU ===>{this.props.question}$$$</div>
          </div>
          <div className="col-lg-6">
                <h2>{this.state.datatext.workarea}</h2>
          </div>
          </div>
        </div>
      );
  } // render

  updateState = (type, data) => {
    if ((type === "OFFICIAL") || (type === "ADMIN")){
      let admin2 = this.state.adminData2;
      if (type === "OFFICIAL") admin2.isOfficial = data;
      if (type === "ADMIN") admin2.isAdmin = data;
      this.setState({adminData2: admin2});  
    }

    if ((type === "DATATEXT") ){
      let tmp = this.state.datatext;
      tmp.workarea = data;
      this.setState({datatext: tmp});  
    }

    
  }
} // App
const mapStateToProps = state => ({
  question: state.question,
  user: state.user
});

const mapActionsToProps = state => ({
  onUpdateQuestion: updateQuestion
});

export default connect(mapStateToProps, mapActionsToProps) (App);
