// let para = "Lorem ipsum dolor sit amet,happy ramadan mubarak adipisicing elit. Accusantium deserunt nisi optio officiis happy ramadan mubarak  minima dolorum? Aliquam tenetur repellendus eligendi deleniti reprehenderit dignissimos obcaecati voluptas,happy ramadan mubarak";

// let findWords = "happy ramadan mubarak";
// let replace = "354125";

// for(i = 0; i < para.length; i++){
//     if(para.slice(i, i + findWords.length)=== findWords){
//         para = para.slice(0, i) + replace + para.slice(i + findWords.length);
//     }
// }

// console.log(para);






// let para = "Lorem ipsum dolor sit amet,happy ramadan mubarak adipisicing elit. Accusantium deserunt nisi optio officiis happy ramadan mubarak  minima dolorum? Aliquam tenetur repellendus eligendi deleniti reprehenderit dignissimos obcaecati voluptas,happy ramadan mubarak"

// let findWords = "happy ramadan mubarak";
// let replace = "121212414";

// para = para.replace("happy ramadan mubarak", "121212414");
// para = para.replace(/happy ramadan mubarak/g, "121212414");

// console.log(para);

// let findWOrds = "happy ramadan mubarak";
// let replaceWords = "twinkle twinkle little star";

// para = para.replace("happy ramadan mubarak", "twinkle twinkle little star");
// para = para = replaceAll("happy ramadan mubarak", "twinkle twinkle little star");

// console.log(para);



// let sum = Number("250") + Number("150")

// let num = 'orange';
// let num2 = '10';

// console.log(Number(num));

// console.log(isNaN(num2));




// let num = "25.3232";
// console.log(parseInt(num));
// console.log(parseFloat(num));


// let num = 5.7;

//  console.log(num.toString());


//  let num = 25.353589;

//  console.log(num.toFixed(2));


// let num = 1.55555;
// num = num.toFixed(4);
// //  1.5556
// if (num[num.length - 1] === "5") {
//     num = num.slice(0, num.length - 1) + "6";
// }

// console.log(num)





// let num = 5.3333;
// num = num.toFixed(2);
// if(num[num.length - 1]==="4"){
//     num = num.slice(0, num.length -1)+"5";
// }
// console.log(num);
















// let now = new Date();

// console.log(now);

// let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = now.getDay();
// console.log(now.getDay());  





//  let ms = now.getMilliseconds();
//  console.log(ms);

//  let msNow = now.getTime();
//  console.log(msNow);












// let now = new Date();
// console.log(now); // Full date and time
// console.log(now.getFullYear());    // Year (e.g., 2025)
// console.log(now.getMonth() + 1);   // Month (0-11, so add 1)
// console.log(now.getDate());        // Day of the month
// console.log(now.getDay());         // Day of the week (0-6, where 0 = Sunday)
// console.log(now.getHours());       // Hours (0-23)
// console.log(now.getMinutes());     // Minutes (0-59)
// console.log(now.getSeconds());     // Seconds (0-59)



// let start = new Date("june 30, 2035").getTime()
// console.log(start)
// let now = new Date().getTime()
// console.log(now)


// let beforeStart = new Date("jan 1,1970").getTime()
// console.log(beforeStart)

// console.log(beforeStart - new Date("1 jan,1980").getTime())


















// let dob = new Date("October 4, 1991");
// let now = new Date();

// let age = now.getTime() - dob.getTime()

// console.log(age / 1000 / 60 / 60 / 24 / 365.25);


















// function addDashOnOddNum(str) {
//     if (!isNaN(str)) {
//         let newStr = "";

//         for (let i = 0; i < str.length; i++) {
//             if (
//                 str[i] % 2 !== 0 &&
//                 str[i + 1] % 2 !== 0 &&
//                 !isNaN(str[i + 1] % 2)
//             ) {
//                 newStr += str[i] + "-";
//             }
//             else {
//                 newStr += str[i];
//             }
//         }
//         console.log(newStr);

//     }
//     else {
//         console.log('Number required');
//     }
// }

// addDashOnOddNum("23497412579");
// addDashOnOddNum("5796213");
// addDashOnOddNum("588a5288");






























// let today = new Date();
// let startDate = new Date("December 11, 2023");

// let diff = today - startDate;

// console.log(diff / 1000 / 60 / 60 / 24 / 30);

















// let dob = new Date("October 20, 2024");
// console.log(dob);

// dob.setDate(4);

// console.log(dob);

// dob.setFullYear(2025);

// console.log(dob);