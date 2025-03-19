import { useState } from 'react'
import ControlledForm from './components/ControlledForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ControlledForm />
    </>
  )
}

export default App
