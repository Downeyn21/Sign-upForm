import { useState, useEffect } from "react";

const apiUrl="https://fsa-jwt-practice.herokuapp.com/authenticate"




function Authenticate({token, setToken}) {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    //  useEffect(() => {
    //     console.log("TOKEN IN AUTH =>",token)
    
    // }, [token])
        
        
        
        
        async function handleToken(e) {
            e.preventDefault()
            
            try {
                const response = await fetch(apiUrl,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                const result = await response.json()
                console.log("MOTHER ITS ME!! => ", result.message)
                
                setSuccessMessage(result.message)

                return result


            } catch (error) {
                setError(error.message)
                
            }
            
        }
        





    return ( 

        <>
            <div>
            {token && <button className="authBtn" onClick={handleToken}>Send the token to the DANGER ZONE!!</button>}
                <div className="tokenContainer">
                {token ? 
                <h4>Authenticate Token: <div className="tokenTxt">{token}</div></h4> :
                <h4>No Authentication</h4>
            }  


                {successMessage && <p>Woah didn't think that would work!</p>}
                {successMessage && <p>LOOK!! => {successMessage}</p>}
                {error && <p>FUCK! => {error}</p>}


                </div>
                {/* {(error || successMessage) && <button className="clearBtn" onClick={setToken(null)}>Get rid of this garbage</button>} */}
            </div>
        </>

     );
}

export default Authenticate;