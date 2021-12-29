import * as React from 'react'
import './subscribe.css'



const Subscribe = () =>{
    return(
        <form>
            <input 
                type="email" 
                id="email" 
                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" 
                size="30" 
                placeholder='Podaj swój e-mail' 
                required 
                />
            <input type='submit' value="Wyślij"/>
        </form>
    )
}

export default Subscribe