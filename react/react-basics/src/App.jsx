import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//component => piece of ui 
//1.functional and 2. class components
//functional component => are normal function but their name starts with capital letter
//must return jsx 
//it must used as a tag inside 

function Header(){
  return <div className="a" >
    this is header component
  </div>
}

function Content() {
  return <div>
    this is content component
  </div>
}
function Footer() {
  return <div>
    this is footer  component
  </div>
}

function App() {
  return (
    <>
    <Header />
    <Content />
    <Footer ></Footer>
    </>
  );
}

export default App;

//version 1 
// //jsx => writing html inside js
// //complete jsx must wrap inside a single element (only one parent element)
// //every tag must be closed
// //use className insteed class
// //{} in jsx => to write js code inside jsx
// // you can not use loop or if-else inside jsx
// let x = 'pawan'
// let el = (
//   <div className="">
//     hello every one <br></br>
//     <p>how are you?</p>
//     <input type="text" />
//   </div>
// );
// let el1 = <h1>this is my first react app </h1>;
// let greet = <div>hello Mr. {x}</div>
// function App() {
//   return (
//     <>
//       {el}
//       {el1}
//       {4+5}
//       {greet}
//     </>
//   );
// }

// export default App;
