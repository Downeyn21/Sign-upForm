import { useState } from "react";

const apiUrl = "BlaBla"


function ControlledForm() {
    const [username, setUsername] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username)

        try {
            const response = await fetch(apiUrl,{
                method: "POST",
                body: JSON.stringify({ username })
                
            }
            ) 
        } catch (error) {
            console.error(error)
        }
        setUsername("")
    }






    return ( 
        <>
            <h2> Your Change To Be SEXY!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input value={username} onChange={ (e) => {
                    setUsername(e.target.value)
                }}/>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default ControlledForm;