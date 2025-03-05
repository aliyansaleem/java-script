// function greetUser(){
//     let firstName = prompt("enter your name");
//     let lastName = prompt("enter your name");
//     let fullname = firstName + " " + lastName;
//     console.log("Hello " + fullname + "!welcome");
// }
// greetUser();





// let mobileBrand = "samsung";
// let mobileModel = "galaxy s20";
// if(mobileBrand){
//         document.write("Mobile brand is: " + mobileBrand + mobileModel);
// }

// let word = "pakistan";
// let index = word.indexOf("n");
// document.write("the word is: " + word + "<br>");
// document.write("index of letter 'n': " + index);

// let word = "hello world";
// let lastIndex = word.lastIndexOf("l");
// document.write("the word is: " + word + "<br>");
// document.write("last index of letter 'l': " + lastIndex);


// let word = "pakistani";
// let charIndex3 = word.charAt(3);
// document.write("the word is: " + word + "<br>");
// document.write("character of index 3: " + charIndex3);


// let city = "I love Hyderabad.";
// let find = "Hyder";
// let reqIndx = city.indexOf(find);

// if (reqIndx !== -1) {
//     city = city.slice(0, reqIndx) + "Islam" + city.slice(reqIndx + find.length);
// }

// document.write(city);

// let sentence = "my name is aliyan";
// let newSentence = sentence.replace( "aliyan", "ali");
// document.write("oriinal sentence: " + sentence + "<br>");
// document.write("after replacement: " + newSentence);



// let str = 521;

// let num = Number(str);
//  let typeStr = typeof str;
//  let typeNum = typeof num;

//  let message = "value is string :" + str + "(type: " + typeStr + ")<br>";
 
// if (typeNum === "Number") {
//     message += "value is number : " + num + "(type: " + typeNum + ")";
// }else {
//     message += "conversation failed!";
// }
// document.write(message);


// function convertToUppercase(text) {
//     return text.toUpperCase();
// }

// // Example usage:
// let userInput = prompt("Enter some text:");
// if (userInput) {
//     let upperText = convertToUppercase(userInput);
//     document.write("<b>Uppercase:</b> " + upperText); // Output on the webpage
// } else {
//     document.write("<b>You didn't enter any text!</b>"); // Handle empty input
// }



// function convertToLowercase(text) {
//     return text.toLowerCase();
// }

// // Example usage:
// let userInput = prompt("Enter some text:");
// if (userInput) {
//     let lowerText = convertToLowercase(userInput);
//     document.write("<b>Lowercase:</b> " + lowerText); // Display on webpage
// } else {
//     document.write("<b>You didn't enter any text!</b>"); // Handle empty input
// }


// let num = 35.36; 
// let strNum = num.toString().replace(".", ""); 
// console.log("Result:", strNum); 


// document.body.innerHTML = "<h2>Result: " + strNum + "</h2>";



// let url = prompt("Enter a URL (e.g., www.facebook.com):");

// if (url.startsWith("www.")) {
//     let domain = url.slice(4);
//     document.body.innerHTML = "<h2>Domain Name: " + domain + "</h2>";
// } else {
//     document.body.innerHTML = "<h2 style='color:red;'>Invalid format! Enter a URL starting with 'www.'</h2>";
// }


// let iftar = ["pakora", "roll", "fruit chaat", 'samosa', 'rooh afza'];
// let iftarItem = document.querySelectorAll(".iftar-item")[0];
// let searchElement = document.querySelectorAll('input')[0];

// function searchIftar() {
//     let searchkeyword = searchElement.value.toLowerCase();
//     if (iftar.includes(searchkeyword)) {
//         let index = iftar.indexOf(searchkeyword);
//         iftarItem.innerHTML = `Your favorite item ${searchkeyword} is available at index ${index}`;
//     }
//     else {
//         iftarItem.innerHTML = `Your favorite item ${searchkeyword} is not available`;
//     }
// }

// let a = "3";
// let b = "3";
// let y = a - b; // String concatenation

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("a - b is " + y);


// let university = "Saylani mass it pogram";
// let letterArray = university.split("");

// for(let i = 0; i < letterArray.length; i++) {
//     document.write(letterArray[i] + "<br>");
// }

// let str = "Hello, World!";
// str = str.toLowerCase();

// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let count = 0;
// let consonanCount = 0;

// for(let i = 0; i < str.length; i++) {
//     if(vowels.includes(str[i])) {
//         count++;
//     } else if(str[i]!='') {
//         consonanCount++;
//     }
// }

// document.write("Number of vowels: " + count + "<br>");

// document.write("Number of consonants: " + consonanCount);


// let text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();

// let words = text.split(" "); 
// let count = 0;

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the'");