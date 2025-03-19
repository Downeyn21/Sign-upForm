import { useState } from "react";
import '../App.css'


//======================API SIGNUP=======================

const apiUrl = "https://fsa-jwt-practice.herokuapp.com/signup"


//============MAIN COMPONENT START================

function SignUpForm({setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

//==================fetch funtion=================

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Username => ",username)
        console.log("Password => ",password)

        try {
            const response = await fetch(apiUrl,{
                method: "POST",
                body: JSON.stringify({ username, password })
            }
        ) 

        const result =  await response.json()
        setToken(result.token)
        } catch (error) {
            setError(error)
        }

//=============RESET USERNAME&PASSWORD===========

        setUsername("")
        setPassword("")
    }






    return ( 
        <>
            <h2> Your Chance To Be SEXY!!</h2>

            {error &&
            <div>
                Error => {error}
            </div>
            }

            <form onSubmit={handleSubmit}>
                <label>Username:   
                <input value={username} onChange={ (e) => {
                    setUsername(e.target.value)
                }}/>
                </label>
                <br />
                <label>Password:   
                <input value={password} onChange={ (e) => {
                    setPassword(e.target.value)
                }}/>
                </label>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default SignUpForm;