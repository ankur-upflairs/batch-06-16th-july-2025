import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactEvent from './ReactEvent'
import ReactState from './ReactState'
import ReactForm from './ReactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ReactEvent /> */}
     {/* <ReactState /> */}
     <ReactForm />
    </>
  )
}

export default App
