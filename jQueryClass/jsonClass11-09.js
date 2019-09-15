// Exercise #1
// Store an array in localStorage and access it
// Ex #2
// Store the question in localStorage and access it
// const student=[
//   {name:"abcd",class:10},
//   {name:"wxyz",class:12}
// ];
// localStorage.setItem("students", JSON.stringify(student));
// let storedNames = JSON.parse(localStorage.getItem("students"));
// console.log(storedNames);


$(document).ready(function(){
  let jsonValues = $.getJSON( "ques-db.json", function() {
//  console.log(jsonValues.responseJSON);
//  if (typeof (Storage) !== "undefined") {
    let dataToStore = JSON.stringify(jsonValues.responseJSON);
  //  console.log(dataToStore);
    localStorage.setItem('questions',dataToStore)
    /*if(localStorage.setItem('questions',dataToStore))
    {
    let retrievedObject = localStorage.getItem('questions');
    console.log(retrievedObject);
    }
    else {
      console.log('false');
 //    }*/
   let retrievedObject = localStorage.getItem('questions');
     let parsedObject = JSON.parse(retrievedObject);
     //console.log(retrievedObject);
     console.log(parsedObject.q1);
         console.log(parsedObject.q2);
 // //}

});
//localStorage.clear();
});
