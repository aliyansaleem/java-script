// for (let i = 0; i < 5; i++)
// {
//     document.write('hello');
//     document.write('<br>');
// }









// for (let i = 0; i < 10; i++)
// {
//     document.write(i);
//     document.write('<br>');
// }







// let tableName = +prompt('enter a table name.');
// let tableLimit = +prompt("how many time you want to multiply?");

// for (let count = 0; count <= tableLimit; count++){
//     document.write(`${tableName} x ${count} = ${tableName * count}`);
//     document.write("<br />");
// }







// let A = ["apple", "nokia", "samsung", "google", "motoralla"];
// for (let i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
    
// }







// let fruits = ['apple', 'banana', 'orange', 'leche', 'mango',];

// for (let i = 0; i < fruits.length; i++)
// {
//     document.write(fruits[i]);
//     document.write('<br>');
// }

// for (let i = 0; i < fruits.length; i++)
//     {
//         document.write('element at index ' + i  + ' is ' + fruits[i] + '<br>');
//         document.write('<br>');
//     }









// let N = prompt("enter a number of items in the array");
// let items = [];
// for (let i = 0; i < N.length; i++) {
//     document.write(A[i] + "<br>");
    
// }







// let resultA = [];
// for (let i = 1; i <= 15; i++){
//     resultA.push(i);
// }
// document.write("counting:",resultA.join(", "));
// document.write("<br>")

// let resultB = [];
// for (let i = 10; i >= 1; i--){
//     resultB.push(i);
// }
// document.write("Reverse counting:",resultB.join(", "));
// document.write("<br>")


// let resultC = [];
// for (let i = 0; i <= 20; i++){
//     resultC.push(i);
// }
// document.write("Even:",resultC.join(", "));
// document.write("<br>")


// let resultD = [];
// for (let i = 1; i < 20; i+= 2){
//     resultD.push(i);
// }
// document.write("odd:",resultD.join(", "));
// document.write("<br>")


// let resultE = [];
// for (let i = 2; i <= 20; i+= 2){
//     resultE.push(i + "k");
// }
// document.write("series:",resultE.join(", "));
// document.write("<br>")





// let A = ["cake","apple pie","cookies","patties"];

// let userInput = prompt("Enter an items to search").toLowerCase();

// if (A.includes(userInput)){
//     alert(userInput + " is available at items");
// }
// else {
//     alert(userInput + " is not available at items");
// }









// for (let i = 5; i <= 100; i += 5){
//     console.log(i);
// }





// let students = ["aliyan", "daniyal", "adbullah", "mustafa", "bilal"];
// let score = [58, 55, 88, 45, 0];

// for (let i = 0; i < students.length; i++){
//     console.log(students[i] + "score" + score[i]);
// }









// let inpCount = prompt('how many items you want to add?');
// let item = [];
//  for (let i = 0; i < inpCount; i++){
//     let item = prompt('enter an item');
//     item.push(item);
//  }
//   console.log(`total items are ${item.length}`);
//     console.log(`item in list are ${item}`);













// let bakery = ['cake','apple pie','cookie','chips',];
// let userWish = prompt('kiy lena hai');
// userWish = userWish.toLowerCase();

// if (bakery.includes(userWish)){
//     console.log('food is avaible');
// }
// else {
//     console.log('food is not availble');
// }

















// let numArr = [14,16,18,22,8,7];
// let smallestNum; 
// let largestNum;

// for (let i = 0; i < numArr.length; i++){
//     let currentNum = numArr[i];
//     if(!largestNum || currentNum > largestNum){
//         largestNum = currentNum;
//     }
//     if(!smallestNum || currentNum < smallestNum){
//         smallestNum = currentNum;
//     }
// }
// console.log(largestNum,smallestNum);





















// let dimArr = [[1,2,3,],[1,2,3,],[1,2,3,]];
// for (let i = 0; i < dimArr.length; i++){
//     let insideArr = dimArr[i];
//     for (let j = 0; j < insideArr.length; j++){
//         console.log(insideArr[j]);
//     }
// }























// let userInput = +prompt('enter number');
// let multiple = 1;
//  for (let i = 1; i <= userInput; i++){
//    if(i % 2  !== 0){
//     console.log(i);
//    }

//  }
//  console.log(multiple);





// let userNum = prompt("enter your number");
// if(! isNaN(userNum)){
//   console.log(userNum);
// }