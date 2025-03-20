
// function greet(username,message = "kayefahalla"){
//      console.log(`${message} ${username}`);
// }
// greet("username","message");




// function printAllParams() {
//     console.log(arguments);
//     let total = 0;
//     // let multiple = 1;

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//         //  total = total + arguments[i];
//         //  multiple = multiple * arguments[i];
//     }
//     console.log(sum);
// }











// function greet(a){
//     console.log(a[1]);
// }
// greet(['apple','banana'])

// function greet(a){
//     console.log(`${a.name} ${a.rollNumber}`);
// }
// greet({name: "aliyan", rollNumber: 3652});













// function execute(cb, num1, num2){
//     cb(num1, num2);
// }
// execute(function(numA,numB){
//     console.log(numA + numB);
// }, 5, 5);

// function execute(cb, num1, num2){
//     cb(num1, num2);
// }
// execute(function(numA,numB){
//     console.log(numA -numB);
// }, 5, 10);
// function execute(cb, num1, num2){
//     cb(num1, num2);
// }
// execute(function(numA,numB){
//     console.log(numA * numB);
// }, 5, 5);
// function execute(cb, num1, num2){
//     cb(num1, num2);
// }
// execute(function(numA,numB){
//     console.log(numA / numB);
// }, 5, 2);














// console.log('hello world');

// let user = prompt("what is your name?");

// function greet(user) {
//     console.log(`Hello ${user}`);
// }

// greet("haider");

// let user = prompt("what is your name");
// function greet(user){
//     console.log(`hello ${user}`);
// }
// greet("Aliyan");
























// function cookFood(food1, food2) {
//     let wholeFood = `${food1} and ${food2}`;

//     return wholeFood;
// }


// let myFood = cookFood("samosa", "fruit chat");

// console.log(myFood);




















// let feeSubmitStudents = [ 'aqw@gmail.com', 'qwe@gmail.com'];
// let itStudent = ['qwe@gmail.com', 'aqw@gmail.com'];
// function login(email,StudentCB,failcd){
//   if(feeSubmitStudents.includes(email)){
//     StudentCB();
//   }
//   else{
//     failcd();
//   }
// }

// let feeMessage = document.querySelectorAll('fee-message')[0];

// function itStudent(){
//     feeMessage.innerhtml = `congratz you are on admission in it`
//     feeMessage.style.backgroundColor = "green";
//     feeMessage.style.color = "white";
// }
// function webDevloper(){
//     feeMessage.innerHTML = `congratz you are on admission in web devloper`
//     feeMessage.style.backgroundColor = "green";
//     feeMessage.style.color = "black";
// }

// function itStudent(){
//     feeMessage.innerHTML = `ap apni cv send karo`;
//     feeMessage.style.backgroundColor = "beige";
//     feeMessage.style.backgroundColor = "red";
// }
// function webDevloper(){
//     feeMessage.innerHTML = `how much salary do you want`;
//     feeMessage.style.backgroundColor = "white";
//     feeMessage.style.color = "black";
// }
// let studentEl = document.querySelectorAll("input")[0];
// function markAttendance(){
//     let studentEmail = studentEl.value;
//     if(itStudent.includes(studentEmail)){
//         login(studentEmail, itStudent , webDevloper);
//     }
//     else {
//         login(studentEmail , itStudent , webDevloper);
//     }
// }




























// function sum(){
//     let count = 0;
//     for(let i = 0; i < arguments.length; i++){
//         count = count + arguments[i];
//     }
//     return count;
// }
// let sum1 = sum(5,9,8,7,5,);
// let sum2 = sum(14,25,85,98);
// console.log(sum1, sum2);

























// let count = 0 ;
// setTimeout(function(){
//     console.log('hello world');
// }, 2000);
// setInterval(function(){
//     console.log('hello world');
// }, 500)





// let user = ["xyz@gmail.com", "abc@gmail.com"]
// let msg = ["hello bro"]; 

// function makeMessage(){
//          let newMsg = `${user} ! ${msg}`;
//          return newMsg
//      }
//      let myMsg = makeMessage("ap ka suit ready he");

//      let h1 = document.querySelectorAll("h1")[0];
//      h1.textContent = myMsg;






// let baseForm = document.querySelectorAll('.base')[0];
// let perpForm = document.querySelectorAll('.perp')[0];
// let errEl = document.querySelectorAll('.error-message')[0];

// function calculate() {
//     let base = baseForm.value;
//     let perp = perpForm.value;
//     if (isNaN(base) || isNaN(perp)) {
//         errEl.innerHTML = "Both fields require numbers.";
//         errEl.style.color = "#ff0000";
//         setTimeout(function(){
//          errEl.innerHTML = "";
//     }, 3000)
//         return;
//     }
//     base = Number(base);
//     perp = Number(perp);
//     let basesquare = square(base)
//     let perpsquare = square(perp)
//     console.log(base, perp);
//     let hypsquare = basesquare + perpsquare
//     let hyp = Math.sqrt(hypsquare)
//     console.log(hyp);

// }

// function square(num){
//    return num * num;
// }

// let user = "Aliyan";
// console.log(user);
// function greetUser(){
//   user = "Aliyan Saleem";
//   console.log(user);
// }
// greetUser();


// let user = "Aliyan";
// console.log(user);
// function greetUser(){
//     let user = "Saleem";
//     console.log(user);
// }
// console.log(user);
// console.log(user);
