import { useEffect, useState } from 'react'
import ControlledForm from './components/SignUpForm'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null)

  useEffect(() => {
    console.log("TOKEN IN APP =>",token)

  }, [token])


  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
