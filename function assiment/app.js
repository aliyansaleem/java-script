

// function bringFood() {
//     document.write('here is yor chicken');
// }
// bringFood();











// function fruits() {
//  console.log('hello user');
//  console.log('here is your apple');   
// }

// fruits();

















// function details(name,lastname) {
//     console.log(` ${name} ${lastname}`);
// }
// details("aliyan","saleem");













// function bringFood(meal1,meal2,guest){
//     console.log(`here is your ${meal1} and ${meal2} for ${guest}.`);
// }

// bringFood("Paratha", "Chai", "me");
// bringFood("Bengan", "Tende", "students");
// bringFood("Biryani", "Tikka", 'susrali');
// bringFood("Kheer", "Gulab Jamun", 'susrali');




















// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(5, 7);
// sum(2, 3);
// sum(9, 0);


// function multiply(num1,num2){
//     console.log(num1*num2);

// }
// multiply(4, 7);
// multiply(3, 2);
// multiply(7, 3);
// function sub(num1,num2){
//     console.log(num1-num2);

// }
// sub(4, 7);
// sub(3, 2);
// sub(7, 3);










// function greetUser(userName, meg){
//     console.log(`${meg} ${userName}`);
// }
// greetUser("khan","imran");
// greetUser("book","face");
// greetUser("aliyan", "saleem");













// function greetUser() {
//     let user = prompt("what is your name");
//     console.log(`hello ${user}`);
// }
// greetUser();












// let newText = "The quick brown fox jumps over the lazy dog.";
// let oldText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi unde excepturi laborum cumque, quae ad inventore dolore nemo et dolores, suscipit non voluptate. Voluptates illum dicta cum inventore quisquam?`;

// let pEl = document.querySelectorAll('p');

// function changePara() {
//     for (let i = 0; i < pEl.length; i++) {
//         if (pEl[i].innerHTML.toLowerCase() === oldText.toLowerCase()) {
//             pEl[i].innerHTML = newText;
//         }
//         else {
//             pEl[i].innerHTML = oldText;
//         }
//     }
// }

// let newText = "twinkle twinkle little star";
// let oldText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam laborum voluptatum dolorum ducimus nesciunt non consequatur illum tempore maxime nostrum, alias iure ipsa architecto. Accusamus totam fuga amet rerum`;

// let pEl = document.querySelectorAll("p");

// function changePara() {
//     for(let i = 0; i < pEl.length; i++){
//         if(pEl[i].innerHTML.toLowerCase() === oldText.toLowerCase()){
//             pEl[i].innerHTML = newText;
//         }
//         else{
//             pEl[i].innerHTML = oldText;
//         }
//     }
// }









// let pEl = document.querySelectorAll('p');
// function changeStyle() {
//     for(let i = 0; i < pEl.length; i++){
//         console.log(pEl[i]);
//         pEl[i].style.color = "blue";
//         pEl[i].style.backgroundColor = "green";

//     }
    
// }




// let inputEl = document.querySelectorAll('input')[0];
// function readForm() {
//     console.log(inputEl.value);
// }


// let changeImg = document.querySelectorAll('img')[0];
//  function changeImg(){
//     for(let i = 0; i < changeImg.length; i++){
//         console.log(changeImg.src="images/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg");
    
//         changeImg[i].style.width = "50px";
//     }
//  }



// function changeImage() {
//     let img = document.getElementById("myImage");

//     // Check current image and change it
//     if (img.src.includes("images/glowing-yellow-light-bulb-inspiration-260nw-83128966.webp")) {
//         img.src = "images/pic_bulboff.gif"; // Change to new image
//     } else {
//         img.src = "images/glowing-yellow-light-bulb-inspiration-260nw-83128966.webp"; // Revert back to original image
//     }
// }






// function dateDiff(dob){
//     let today = new Date();
//     let diff = (today - dob) / 1000 / 60 / 60 / 24 / 356;
//     return Math.floor(diff);
// }
// let myAge = dateDiff(new Date("October 4, 1991"));
// let studentAge = dateDiff(new Date("November 25, 1997"));
//  console.log(myAge, studentAge);
















// function greetUser(monthName){

//     if (monthName === "Jan") {
//         return "Happy Birthday";
//     }
//     else if (monthName === "Jun") {
//         return "Happy Wedding Anniversary";
//     }
//     else if (monthName === "Nov") {
//         return "Congrats! You have completed 2 years in our organisation.";
//     }
// }

// let greetMsg = greetUser("Nov");

// console.log(greetMsg);


// let h1El = document.querySelectorAll('h1');
// h1El[0].innerHTML = greetMsg;






// let h1 = document.querySelectorAll("h1");
// function greetUser(){
//     let user = prompt("what is your name");
//    for(let i = 0; i < h1.length; i++){
//     h1[i].innerHTML = user;
// }
// }


// let h1 = document.querySelectorAll(".captain")[0];
//  let captain = ['sarfaraz', 'babar','rizwan'];

//  function checkCaptain(){
//     let current = h1.innerHTML;
//     let current1 = captain.indexOf(current);
//     let nextCaptain = current1 + 1;
//     if(nextCaptain === captain.length){
//         nextCaptain = 0;
//     }
//     h1.innerHTML = captain[nextCaptain];
//  }



// let h1 = document.querySelectorAll('h1')[0];

// function greetUser() {
//     let username = prompt('what is your name');

//     h1.innerHTML = username;
//     document.write('welcome back');
//     let captains = ['Imran khan is the great leader of pakistan']
// }



// let para = document.querySelectorAll("p")[0];
// let span = document.querySelectorAll("span")[0];

// function increase(){
//     span.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
// }


// mode;




// let imgEl = document.querySelectorAll('img')[0];
// imgEl.style.width = '300px';
// imgEl.style.height = '300px';
// let is5Rupee = true;
// function changeCoinFace() {
//     if (is5Rupee) {
//         is5Rupee = false;
//         imgEl.src = './images/chand.jpg'
//     }
//     else {
//         is5Rupee = true;
//         imgEl.src = './images/head5.webp'
//     }
// }




// function changeColors() {
//     let paragraphs = document.querySelectorAll("p"); // Select all paragraphs
    
//     for (let i = 0; i < paragraphs.length; i++) {
//         if (i % 3 === 0) {  
//             paragraphs[i].style.color = "red";  
//         } else if (i % 3 === 1) {  
//             paragraphs[i].style.color = "green";  
//         } else {  
//             paragraphs[i].style.color = "yellow";  
//         }
//     }
// }

  
    
    
    
    
    
    

// function countDown(n) {
//     if (n <= 0) {  // Base case: Stop when n reaches 0
//         console.log("Done!");
//         return;
//     }
//     console.log(n);
//     countDown(n - 1); // Recursive call
// }

// countDown(5);


// function countDown(n){
//     if(n <=0){
//         console.log("done");
//         return;
//     }
//     console.log(n);
//     countDown(n-1);
// }
// countDown(5);



// function factorial(n) {
//     if (n === 0) {  // Base case
//         return 1;
//     }
//     return n * factorial(n - 1); // Recursive call
// }

// console.log(factorial(5)); // Output: 120




// function factorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n + factorial(n - 1);
// }
// console.log(factorial(5));








// console.log("Start");

// setTimeout(() => {
//     console.log("Delayed message");
// }, 1000);

// console.log("End");


// let inputEl = document.querySelectorAll('input')[0];
// let olEl = document.querySelectorAll('ol')[0];

// function makeTitleCase() {
//     let userName = inputEl.value;
//     if (!userName) return;

//     let splitName = userName.split(" ");
//     let titleCaseNames = [];
//     for (let i = 0; i < splitName.length; i++) {
//         let eachName = splitName[i];
//         let firstChr = eachName[0];
//         let restChr = eachName.slice(1);

//         let firstChrUpper = firstChr.toUpperCase();
//         let restChrLower = restChr.toLowerCase();
//         let titleCase = `${firstChrUpper}${restChrLower}`;

//         titleCaseNames.push(titleCase);
//     }

//     let titleCaseName = titleCaseNames.join(" ");
//     olEl.innerHTML += `<li>${titleCaseName}</li>`;
//     inputEl.value = "";
// }
// let inputEl = document.querySelectorAll('input')[0];
// let olEl = document.querySelectorAll('ol')[0];

// function makeTitleCase(){
//     let userName = inputEl.value;
//     if(!userName) return;
//     let splitName = userName.split(" ");
//     let titleCaseNames = [];
//     for(let i = 0; i < splitName.length; i++){
//         let eachName = splitName[i];
//         let firstChr = eachName[0];
//         let restChr = eachName.slice(1);
//         let firstChrUpper = firstChr.toUpperCase();
//         let restChrLower = restChr.toLowerCase();
//         let titleCase = `${firstChrUpper}${restChrLower}`;
//         titleCaseNames.push(titleCase);
//     }
//     let titleCaseName = titleCaseNames.join(" ");
//     olEl.innerHTML += `<li>${titleCaseName}</li>`;
//     inputEl.value = "";
// }
