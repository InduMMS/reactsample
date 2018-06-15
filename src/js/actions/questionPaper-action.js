import {UPDATE_QUESTION} from "../constants/action-types";
//export const UPDATE_QUESTION = "ADD_QUESTION";

export function updateQuestion(newQuestion){
    return {
        type: UPDATE_QUESTION,
        payload: {
            question: newQuestion
        }
    }
}