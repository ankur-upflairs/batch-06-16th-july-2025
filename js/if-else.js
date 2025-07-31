var prompt = require('prompt-sync')();
// if -else 
// if(conditon){
//     //code (execute when condition true)
// }
// else {
//     //code (execute when condition false)
// }
// let age =12;
// if(age > 18){
//     console.log('eligible for voting')
// }
// else {
//     console.log('not eligible for voting')
// }
//take a no input from user and check if the no. is negetive, positive
//zero
//if-else-if (if-else ladder)
// let n = prompt('Enter a no : - ')
//input is always string 
// n= parseInt(n)
// n= parseFloat(n)
// n = Number(n)
// if(n>0){
//     console.log('no. is positive')
// }
// else if(n<0){
//     console.log('no. is negetive')
// }
// else{
//     console.log('no. is zero')
// }
/*Check if a number is positive, negative, or zero.

Check if a number is even or odd.

Check if a person is eligible to vote (age ≥ 18).

Compare two numbers and print the greater one.

Check if a number is divisible by 5.

Check if a number is a multiple of 3 or 7.

Check if two numbers are equal or not.*/
//take a no input (1-12) from user and print month name accordingly
let day = parseInt(prompt('enter day no b/w 1-7 : '))
switch (day) {
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;
    case 3:
        console.log('wednessday')
        break
    default:
        console.log('default case')
        break;
}

//ternary operator => short-hand of if-else
// condition ? 'statement1' : 'statement2'

//findout i is positive or negetive
let i =-45
i>=0 ? console.log('positive') : console.log('negetive')



