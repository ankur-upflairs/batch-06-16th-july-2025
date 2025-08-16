import React, { useState } from "react";

function ReactForm() {
  const [user,setUser] =useState({
    name:'',email:''
  })

  function handleChange(e) {
    setUser({...user,[e.target.name] : e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    // console.log(name,email)
  }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleChange} value={user.Reactname} /> <br />
        <input name="email"
          type="text"
          onChange={handleChange}
          value={user.email}
        />
        <button>submit</button>    
      </form>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
    </div>
  );
}




// function ReactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//     // console.log(name);
//   }
//   function handleSubmit(e){
//     e.preventDefault()
//     console.log(name,email)
//   }
//   return (
//     <div>
//       <form  onSubmit={handleSubmit}>
//         <input type="text" onChange={(e) => handleChange(e)} value={name} /> <br />
//         <input
//           type="text"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />
//         <button>submit</button>    
//       </form>
//       <h3>{name}</h3>
//       <h3>{email}</h3>
//     </div>
//   );
// }

// function ReactForm() {
//     const [name,setName] = useState('')

//     function handleChange(e) {
//         setName(e.target.value)
//         console.log(name)
//     }
//   return (
//     <div>
//         <input type="text" onChange={(e)=>handleChange(e)} value={name} />
//     </div>
//   )
// }

export default ReactForm;
