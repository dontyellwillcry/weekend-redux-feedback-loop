import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



function CommentsInput() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [addInput, setAddInput] = useState('')

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        dispatch({
            type:"ADD_FEEBACK",
            payload:addInput

        })
        history.push("/review");

    }

    return (<>
    <h1>Any comments you want to leave?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Comments?</label>
      <input type="text" placeholder='comments' onChange={(event) => setAddInput(event.target.value)}/>

      

      <button type="submit">NEXT</button>
    </form>
    </>)
}



export default CommentsInput;