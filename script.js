//Task 01:
/*Declare and initialize an empty multidimensional array. (Array of arrays)*/

let arrArray = [[]];

//Task 02:
/*Declare and initialize a multidimensional array representing the following matrix:*/

let multiArray = [[0,1,2,3], [1,0,1,2], [2, 1, 0, 1]];

//Task 03:
/*Write a program to print numeric counting from 1 to 10.*/

for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//Task 04:
/*Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.*/

let userInp = prompt("Enter a number to show its multiplication table.");
let userLength = prompt("Enter length Multiplication table");

document.write("<p>" + "Multiplication table of " + userInp +"</p>"+ "<p>" + "Length of " + userLength);

for (let i = 1; i <= userLength; i++) {
    document.write("<p>" + userInp + " x " + i + " = " +userInp * i + "</p>")
}

//Task 05:
/*Write a program to print items of the following array using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];*/

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(let i = 0; i < fruits.length; i++) {
    // document.write(fruits[i] + "</br>");
    document.write("<p>" + "Element at index " + i + " is " + fruits[i] + "</p>")
}


//Task 06:
/* Generate the following series in your browser. See example output.*/

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("Counting: ");
for (let i = 1; i <= 15; i++) {
    document.write("<br>" +i + "<br>");
}

//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("Reverse Counting: ");
for (let i = 10; i >= 1; i--) {
    document.write("<br>" +i + "<br>");
}

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<h3>" + "Even" + "</h3>");
let modulus;
for (let i = 0; i <= 20; i++) {
    modulus = i % 2;
    if(modulus === 0) {
        document.write(i)
    }
}

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<h3>" + "Odd" + "</h3>");
let modulusOdd;
for (let i = 0; i <= 20; i++) {
    modulusOdd = i % 2;
    if(modulusOdd !== 0) {
        document.write(i)
    }
}

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h3>" + "Series" + "</h3>");
let modulusVar;
for (let i = 1; i <= 20; i++) {
    modulusVar = i % 2;
    if(modulusVar === 0) {
        document.write(i + "k ")
    }
}

//Task 07:
/*You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:*/

let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to XYZ Bakery, What would you like to order?");
let flag = false;

for(let i = 0; i < bakery.length; i ++) {
    if (userInput === bakery[i]) {
        flag = true;
        document.write(userInput + " is available at index " + i + " in our bakery");
    } 
}
if (flag == false) {
    document.write("We are sorry "+ userInput + " is not available in our bakery");
}

//Task 08: 
/* Write a program to identify the largest number in the given array. */

let A = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 0; i < A.length; i++) {
    if (A[i] > largest ) {
      largest = A[i];
    }
  }

document.write("Array Items: " + A);
document.write("</br> The largest number is " + largest);

//Task 09:
/* Write a program to identify the smallest number in the given array.
A = [24, 53, 78, 91, 12]*/

let B = [24, 53, 78, 91, 12];
let smallest = B[0];

for (let i = 0; i < B.length; i++) {
    if (B[i] < smallest) {
      smallest = B[i];
    }
  }

document.write("Array Items: " + B);
document.write("</br> The smallest number is " + smallest);

//Task 10:
/* Write a program to print multiples of 5 ranging 1 to 100.*/

let multiple;
for (let i = 1; i <=100; i++) {
    multiple = i % 5;
    if(multiple === 0) {
        document.write(i + " ");
    }
}