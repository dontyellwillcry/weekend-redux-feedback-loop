import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";



function CommentsInput() {
    const history = useHistory();

    function handleNext(event) {
        event.preventDefault();
        console.log('inside handleNext')
        history.push("/");

    }

    return (<>
    <h1>Any comments you want to leave?</h1>
    <form onSubmit={(event) => handleNext(event)}>
      <label>Comments?</label>
      <input type="text" placeholder='comments'required/>

      

      <button type="submit">NEXT</button>
    </form>
    </>)
}



export default CommentsInput;