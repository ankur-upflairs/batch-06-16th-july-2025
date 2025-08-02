// function is a reusable block of code that perform a perticular task 

// function greeting(){
//     console.log(`hello Mr. sunil , welcome to my house.`)
// }
// greeting()
// function greeting(name){
//     console.log(`hello Mr. ${name} , welcome to my house.`)
// }
// greeting('pawan')
// greeting('gagan')

// function sum(a,b){
//     return a+b 
// }
// console.log(sum(34,45))

//function 
//function expression
// find the cube 
// let cube = function(n){
//     return n**3
// }
// console.log(cube(5))

// arrow function
// let square = (a)=>{
//     return a**2
// }
// if single line statement
// let square = (a)=> a**2
//if only one argument
// let square = a=>a**2
// console.log(square(23))
// make a function that replaces a single characater in string and return
// new string (without using built in method )
// function replace(str,a,b){
//     let x= ''
//     for(let i =0;i<str.length;i++){
//         if(str[i] == a){
//             x+=b
//         }else{
//             x+=str[i]
//         }
//     }
//     return x 
// }
// console.log(replace('hello','e','x'))

//cb function => cb function is a fnc that passed as an argument to another 
// fnc and called inside it 

const calculateInterest =(rr,cb_fnc)=>{
    let a = cb_fnc(rr)
    return a
}
const bob =(rr)=>{
    return rr * 2
}

// console.log(calculateInterest(5,bob))
// console.log(calculateInterest(12,a=>a+3))




