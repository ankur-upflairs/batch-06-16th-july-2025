import React from 'react'



function SingleTask({title,description , date}) {

// function SingleTask(props) {
//     // console.log(props)
//     let {title,description , date} = props
  return (
    <div style={{width:'50%',margin:'5px auto',border:'1px solid'}}>
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
        <div className="date">{date}</div>
    </div>
  )
}


// function SingleTask(props) {
//     // console.log(props)
//   return (
//     <div style={{width:'50%',margin:'5px auto',border:'1px solid'}}>
//         <div className="title">{props.title}</div>
//         <div className="desc">{props.description}</div>
//         <div className="date">{props.date}</div>
//     </div>
//   )
// }

// function SingleTask(props) {
//     console.log(props)
//   return (
//     <div style={{width:'50%',margin:'5px auto',border:'1px solid'}}>
//         <div className="title">buy fruits</div>
//         <div className="desc">buy fruits from market</div>
//         <div className="date">2025-10-09</div>
//     </div>
//   )
// }

export default SingleTask