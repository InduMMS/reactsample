import React, { Component } from 'react';
import AdminBoxes from  "./AdminBoxes";
import APICalls from  "./ApiCalls";

/*
  <OfficialPanel  qcolor = {this.state.STYLE.officialColor}     class={this.state.CLASS} 
                  layout={this.state.LAYOUT}        myDataProp = {this.state.adminData} />
*/

class OfficialPanel extends Component {

  constructor(props) {
    super(props);
    this.state = { questions: []};
  } // constructor

    render() {
      return (
        <div className="panel panel-warning">
          <div style={this.props.qcolor} className="panel-heading" data-toggle="collapse" data-target="#officialBody"><h4>Official</h4></div>
          <div className="panel-body" id="officialBody"  className="collapse">
            <h3>Panel Content</h3> 

            {this.state.questions.map(
              (dynamicComponent, i) => 
                <div  key = {i} style={this.props.layout.box}>
                  <AdminBoxes class={this.props.class} headerContent={"QuestionPaper:" + (i + 1)} bodyContent={dynamicComponent.question} 
                      key = {i} componentData = {dynamicComponent} 
                      updateStateProp={this.props.updateState} clickLabel={dynamicComponent.question} 
                      myDataProp={this.props.myDataProp}/>
                </div>)}
          </div>


        </div>
      );
    }

    componentDidMount() {
      APICalls.getAllQuestions()
      .then(questionsList => {
          this.setState({questions: questionsList});
      });
    }// componentDidMount
  }

export default OfficialPanel;
