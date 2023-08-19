import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



function SupportInput() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [addInput, setAddInput] = useState('')

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        dispatch({
            type:"ADD_FEEDBACK",
            payload:addInput

        })
        history.push("/comments");

    }

    return (<>
    <h1>How well are you being supported?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Support?</label>
      <input type="text" placeholder='1-5'required onChange={(event) => setAddInput(event.target.value)}/>

      

      <button type="submit">NEXT</button>
    </form>
    </>)
}



export default SupportInput;