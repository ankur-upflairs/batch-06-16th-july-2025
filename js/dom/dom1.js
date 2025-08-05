// let a = document.getElementsByTagName('p') //html collection
// // console.log(a)
// let b = document.getElementsByClassName('x')//html collection
// console.log(b)
// let c = document.getElementById('y') //element 
// // console.log(c) 
// let d = document.querySelector('.x') //element
// // console.log(d) 
// let e = document.querySelectorAll('.x') //node list 
// console.log(e)
//accessing text and html =>
// let f = document.getElementById('a')
// console.log(f.innerText)
// console.log(f.innerHTML)
// f.innerText = 'changed text'
// f.innerHTML = '<b>hello everyone</b>'
function show(){
    alert('button clicked') 
}
// let button = document.getElementById('btn')
// button.addEventListener('mouseenter',function(){
//     // alert('mouse entered on button')
//     button.innerText = 'mouse is on'
// })
// button.addEventListener('mouseleave',function () {
//     button.innerText = 'mouse is out'
// })
//changing styles 
let a = document.getElementById('a')
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click',function(){
    //remove hyphen and convert it to camelcase 
    //and value must be string
    a.style.color = 'red'
    a.style.backgroundColor = 'blue'
})
//make a button that show a box onclick and a button that hides the same box
//make button to change the theme of webpage(dark/light)
let btn2 = document.getElementById('btn2')
let para = document.getElementById('para')
btn2.addEventListener('click',()=>{
    //working with attributes
    // let c = para.getAttribute('class')
    // console.log(c)
    // para.setAttribute('class','e')
    // para.title = 'this is paragraph'
    //working with classes
    // para.classList.remove('d')
    // para.classList.add('e') 
    para.classList.toggle('e')
})






