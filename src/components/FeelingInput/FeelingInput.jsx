import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";





function FeelingInput() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [addInput, setAddInput] = useState('');

    

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        dispatch({
            type:"ADD_FEEBACK",
            payload:addInput

        })


        history.push("/understanding");
    }

    return (<>
    <h1>How are you feeling today?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Feeling?</label>
      <input type="text" placeholder='1-5'required onChange={setAddInput}/>

      

      <button type="submit">NEXT</button>
    </form>
    
    </>)
}



export default FeelingInput;