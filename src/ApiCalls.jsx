var APICalls = {};
var URL_Get_Questions = "http://jsonplaceholder.typicode.com/posts/1";

APICalls.getAllQuestions = function(){
    console.log("INDU from APICalls.getAllQuestions");


    return  new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        fetch(URL_Get_Questions)
        .then(function(response) {
            console.log("INDU BEFORE---" + JSON.stringify(response)); 
            response = tempGetQuestions();
            console.log("INDU AFTER---" + JSON.stringify(response)); 
            resolve(response);
        }).catch(function(response) {
            reject(Error("It broke"))
        });          
      });

} 

// TO BE DELETED - Used to Reset data that is got from Standard URL
function tempGetQuestions(){
    let questionsObject = [{"question":"What is OOPS"}, {"question":"What is Difference between SET and LIST"} ];
    return questionsObject;
} // tempGetQuestions

export default APICalls;

// response =>{
//     console.log("INDU BEFORE---" + JSON.stringify(response)); 
//     response = tempGetQuestions();
//     console.log("INDU AFTER---" + JSON.stringify(response)); 
