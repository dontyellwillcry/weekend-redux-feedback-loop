import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";




function UnderstandingInput() {
    const history = useHistory();

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        history.push("/supported");

    }

    return (<>
    <h1>How Well are you understanding the content?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Understanding?</label>
      <input type="text" placeholder='1-5'required/>

      

      <button type="submit">NEXT</button>
    </form>
    </>)
}



export default UnderstandingInput;