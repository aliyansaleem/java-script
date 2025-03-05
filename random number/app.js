
// onsole.log(ceil);

//  let num1 = 8.1;
//  let num2 = 5.1;

//  let round = Math.round(num2);
//  console.log(round);


// let floor = Math.floor(num2);
// console.log(floor);

// let ceil = Math.ceil(num2);
//  console.log(ceil);





// let num1 = -1.1;
// let num2 = -1.9;

// let floor = Math.floor(num2); //-2
// console.log(floor);

// let ceil = Math.ceil(num1); // -1
// console.log(ceil);






// let imageEl = document.querySelectorAll('img')[0];

// function tossTheCoin() {
//     let randomNum = Math.ceil(Math.random() * 2);

//     if (randomNum === 1) {
//         imageEl.src = 'images/chand.PNG'
//     }
//     else if (randomNum === 2) {
//         imageEl.src = 'images/chap.PNG'
//     }
// }









// let imgEle = document.querySelectorAll('img')[0];
// function spinDisc() {
//     let num = Math.ceil(Math.random() * 6)
//     if (num === 1) {
//         imgEle.src = "images/dice-1.jpeg"
//     }
//     else if (num === 2) {
//         imgEle.src = "images/dice-2.jpeg"
//     }
//     else if (num === 3) {
//         imgEle.src = "images/dice-3.jpeg"
//     }
//     else if (num === 4) {
//         imgEle.src = "images/dice-4.jpeg"
//     }
//     else if (num === 5) {
//         imgEle.src = "images/dice-5.jpeg"
//     }
//     else if (num === 6) {
//         imgEle.src = "images/dice-6.jpeg"
//     }
//     console.log(num);
// }








// Add event listener to button
// rollButton.addEventListener("click",rollDice);








// let para = "Lorem ipsum dolor sit amet Aliyan. Sint dolorem ad quidem repudiandae Aliyan quasi labore sit ducimus iure laudantium et molestias dicta odit est,Aliyan velit facere?"

// let findingWord = "daniyal";
// let replacedWord = "aliyan";

// for (let i = 0; i < para.length; i++) {
//     if (para.slice(i, i + findingWord.length) === findingWord) {
//         para = para.slice(0, i) + replacedWord + para.slice(i + findingWord.length);
//     }
// }
// console.log(para);
// for(let i = 0; i < para.length; i++){
//     if (para.slice(i, i + findingWord.length)=== findingWord){
//         para = para.slice(0, i) + replacedWord + para.slice(i + findingWord);
//     }
// } console.log(para);






// let imageEl = document.querySelectorAll('img')[0];
// function tossTheCoin() {
    // let randomNum = Math.ceil(Math.random() * 6);
    // if (randomNum >= 1 && randomNum < 6) {
    //     imageEl.src = 'images/chand.PNG'
    // }
    // else if (randomNum === 6) {
    //     imageEl.src = 'images/chap.PNG'
    // }


//     let randomNum = Math.ceil(Math.random()*4);
//     if (randomNum >= 1 && randomNum < 4){
//         imageEl.src = 'images/head (1).jpeg'
//     }
//     else if (randomNum === 4){
//         imageEl.src = 'images/head (2).jpeg'
//     }
// }





// let h1 = document.querySelectorAll(".captain")[0]
// let captain = ["sarfaraz","babar","rizwan"]
// function displayCaptain(){
//     let currentCaptain = h1.innerHTML;
//     let currentCap = captain.indexOf(currentCaptain);
//     let nextCaptain = currentCap + 1;
//     if(nextCaptain === captain.length){
//         nextCaptain = 0
//     }
//     h1.innerHTML = captain[nextCaptain];
// }




// let colors = ['#ff000', '#00ff00', '#0000ff', '#ffff00'];

// let colorDiv = document.querySelectorAll('p');


// function changing () {
//     for (let i = 0; i < colorDiv.length; i++) {
//     let p = colorDiv[i];
//     let random = Math.floor(Math.random() * colors.length)
    
//     let ranColor = colors[random];
//     p.style.color = ranColor
// }

// }


// let city = "I love Hyderabad"
// let find = 'Hyder';
// let reqIndx = city.indexOf(find);

// if (reqIndx !== -1) {
//     city = city.slice(0, reqIndx) + "Islam" + city.slice(reqIndx + find.length);
// }
// console.log(city);




let iftar = ["pakora", "roll", "fruit chaat", 'samosa', 'rooh afza'];
let iftarItem = document.querySelectorAll(".iftar-item")[0];
let searchElement = document.querySelectorAll('input')[0];

function searchIftar() {
    let searchkeyword = searchElement.value.toLowerCase();
    if (iftar.includes(searchkeyword)) {
        let index = iftar.indexOf(searchkeyword);
        iftarItem.innerHTML = `Your favorite item ${searchkeyword} is available at index ${index}`;
    }
    else {
        iftarItem.innerHTML = `Your favorite item ${searchkeyword} is not available`;
    }
}








