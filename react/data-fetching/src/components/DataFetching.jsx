import axios from 'axios'
import React,{useEffect, useState} from 'react'

function DataFetching() {
    //1.cb fnc 2. dependency array
    //[] => effect run once
    const [posts,setPosts] = useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            // console.log(res.data)
            setPosts(res.data)
        })
    },[])
  return (
    <div>
        {posts.map((post,i)=>{
            return <div style={{width:'70%',margin:'10px auto',border:'1px solid'}} key={i}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        })}
    </div>
  )
}

export default DataFetching