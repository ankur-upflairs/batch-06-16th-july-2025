import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Es module system =>export => import 
//if u are using component than file first letter should be capital
//1. export default (only one) 
// can be imported by any name
import Header from './Header'
//2. named export (multiple fn )
//use same name as exported
import { Content,Footer as Foot } from './Content'


function App() {
  

  return (
    <>
     <Header />
     <Content />
     <Foot />
    </>
  )
}

export default App
