//  let studentNames = [];
//  console.log(studentNames);






// let studentNames = new Array();
// console.log();






// let stringsArray = ['alice', 'bob', 'charlie'];
// console.log(stringsArray); 






// let numbersArray = ['10', '20', '30', '40', '50'];
// console.log(numbersArray);






// let booleanArray = [true,false,true,false];
// console.log(booleanArray);





//  let mixedArray = ['john', 25, true , 'null', 3.14];
//  console.log(mixedArray);




// let mobileNetworks = ["jazz", "ufone", "telenor", "zong"];
// console.log(mobileNetworks);



// let color = ["red", "green", "blue"];
// document.write("initial color:" + color.join(", ")+ "<br>");





// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// // Display the initial array in the browser
// document.write("Initial Colors: " + colors.join(", ") + "<br><br>");

// a. Ask the user what color to add at the beginning
// let startColor = prompt("Enter a color to add at the beginning:");
// if (startColor) {
//     colors.unshift(startColor); // Add to the beginning
// }
// document.write("After adding at the beginning: " + colors.join(", ") + "<br><br>");

// // b. Ask the user what color to add at the end
// let endColor = prompt("Enter a color to add at the end:");
// if (endColor) {
//     colors.push(endColor); // Add to the end
// }
// document.write("After adding at the end: " + colors.join(", ") + "<br><br>");

// // c. Add two more colors to the beginning
// colors.unshift("Pink", "Orange");
// document.write("After adding two more colors at the beginning: " + colors.join(", ") + "<br><br>");













// // initialize an array with some colors
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// // Display the initial array in the browser
// document.write("Initial Colors: " + colors.join(", ") + "<br><br>");

// // d. Delete the first color in the array
// colors.shift();
// document.write("After deleting the first color: " + colors.join(", ") + "<br><br>");

// // e. Delete the last color in the array
// colors.pop();
// document.write("After deleting the last color: " + colors.join(", ") + "<br><br>");

// // f. Ask user for an index and a color to insert
// let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
// let colorToAdd = prompt("Enter the color name:");
// if (!isNaN(indexToAdd) && colorToAdd) {
//     colors.splice(indexToAdd, 0, colorToAdd); // Insert color at the specified index
// }
// document.write("After adding color at index " + indexToAdd + ": " + colors.join(", ") + "<br><br>");

// // g. Ask user for an index and how many colors to delete
// let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
// let countToDelete = parseInt(prompt("Enter how many colors you want to delete:"));
// if (!isNaN(indexToDelete) && !isNaN(countToDelete)) {
//     colors.splice(indexToDelete, countToDelete); // Remove specified number of colors
// }
// document.write("After deleting " + countToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", ") + "<br>");




















// let studentScores = [320, 230, 480, 120];

// document.write("Scores of Students: " + studentScores.join(", ") + "<br><br>");

// studentScores.sort((a, b) => a - b);

// document.write("Ordered Scores of Students: " + studentScores.join(", ") + "<br><br>");



// let fruits = ["apple", "banana", "cherry", "date", "watermelon"];
// document.write("fruitslist: " + fruits.join(", ") + "<br></br>");

// fruits.sort();

// document.write("ordered fruits list:" + fruits.join(","));





// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];


// let selectedCities = cities.slice(2, 4);


// document.write("<b> Cities list: </b>" + cities.join(", ") + "<br><br>");
// document.write("<b> Selected cities list: </b>" + selectedCities.join(", "));







// let devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("cpu");
// devices.push("monitor");

// while (devices.length > 0) {
//     console.log("out:", devices.shift());   
// }




// let arr = ["This", "is", "my", "cat"];


// document.write("<b>Array:</b> " + arr.join(", ") + "<br><br>");


// let sentence = arr.join(" ");

// document.write("<b>String:</b> " + sentence);




//  let devices = [];
// devices.push("keyboard"+);
// devices.push("mouse");
// devices.push("cpu");
// devices.push("monitor");

//  while (devices.length > 0) {
//     console.log("out:", devices.pop());   
//  }



// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// document.write('<select>');

// manufacturers.forEach(function(manufacturer) {
//     document.write('<option value="' + manufacturer + '">' + manufacturer + '</option>');
// });


// document.write('</select>');






// let multiArray = [];


// multiArray.push([]);
// multiArray.push([]);
// console.log(multiArray); 




let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

