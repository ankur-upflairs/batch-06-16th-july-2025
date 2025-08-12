
//style {} inside these pass an object of styles
//use css property as key 
//remove hyphen (-) and convert it to the camel case 
//every value must be string 

function Content(){
  return <div style={{ color:'red',backgroundColor:'blue',border:'1px solid'}} >
    this is Content component
    </div>

}

function Footer(){
  return <div>
    this is Footer component
    </div>
}

export {Content,Footer}
