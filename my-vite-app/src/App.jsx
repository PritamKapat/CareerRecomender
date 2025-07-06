import { useState } from 'react'
import './App.css'
import Home from './templates/home'
import MCQAssessment from './templates/MCQAssessment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <MCQAssessment />
    </>
  )
}

export default App
