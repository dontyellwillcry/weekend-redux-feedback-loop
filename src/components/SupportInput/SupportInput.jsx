import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";



function SupportInput() {
    const history = useHistory();

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        history.push("/comments");

    }

    return (<>
    <h1>How well are you being supported?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Support?</label>
      <input type="text" placeholder='1-5'required/>

      

      <button type="submit">NEXT</button>
    </form>
    </>)
}



export default SupportInput;