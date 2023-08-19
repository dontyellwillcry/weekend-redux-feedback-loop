import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";




function FeelingInput() {
    const history = useHistory();
    

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        history.push("/understanding");
    }

    return (<>
    <h1>How are you feeling today?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Feeling?</label>
      <input type="text" placeholder='1-5'required/>

      

      <button type="submit">NEXT</button>
    </form>
    
    </>)
}



export default FeelingInput;