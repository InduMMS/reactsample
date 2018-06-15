import { UPDATE_QUESTION } from "../constants/action-types";
//import UPDATE_QUESTION from "../actions/questionPaper-action";

export default function questionPaperReducer(state = [], {type, payload}) {
  switch (type){
		case UPDATE_QUESTION:  	
	    return payload.question;
		default: 
			return state;
  }
}
