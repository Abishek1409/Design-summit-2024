import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgimg from './images/bg_img.jpg'
import Event from './Nonev'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [event, setEvent] = useState("Design Summit")
  

  return (
    <>
    {/* <Event eventName={event}/> */}
       <Event eventName={event}/>
    </>
  )
}

export default App
