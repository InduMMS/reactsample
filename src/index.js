// D:\im\myapp\src\index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import index from "./index";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";
import questionPaperReducer from "./js/reducers/questionPaper-reducer";
import adminReducer from "./js/reducers/admin-reducer";

const allReducers = combineReducers({
  questionPaperReducer: questionPaperReducer,
  adminReducer: adminReducer
});
const store = createStore(allReducers,
  {
  questionPaperReducer: [{name:'iPhone'}],
  adminReducer: 'Michael'    
  });


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));


// console.log(store.getState());
// const updateQuestionAction = {
//   type: "updateQuestion",
//   payload: {
//     newState: "New Question by Indu"
//   }
// };

// store.dispatch(updateQuestionAction);
// console.log(store.getState());

/* 
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
*/

