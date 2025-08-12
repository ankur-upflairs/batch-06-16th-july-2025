
//style {} inside these pass an object of styles
//use css property as key 
//remove hyphen (-) and convert it to the camel case 
//every value must be string 

import { Fragment } from "react"

function Content(){
  return <div style={{ color:'red',backgroundColor:'blue',border:'1px solid'}} >
    this is Content component
    </div>

}
//fragments are replacement of parent div in jsx 
function Footer(){
  return <>
    this is Footer component
    </>  
}
// function Footer(){
//   return <Fragment>
//     this is Footer component
//     </Fragment>  
// }

export {Content,Footer}
