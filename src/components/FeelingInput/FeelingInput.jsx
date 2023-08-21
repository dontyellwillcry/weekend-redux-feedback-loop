import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

function FeelingInput() {
  const history = useHistory(); // lets us navigate to whatever path we describe below.
  const dispatch = useDispatch(); // lets a connection to our 'store'

  const [addInput, setAddInput] = useState(""); // This deconstructed function helps connect our input with our payload.

  function handleNext(event) {
    // handleNext function that dispatches the usuer input, which was saved as addInput, and sends it to ADD_FEELING as a payload
    event.preventDefault();
    console.log("inside handleNext");
    dispatch({
      type: "ADD_FEELING",
      payload: addInput,
    });

    history.push("/understanding"); // Navigates to the /understnding path
  }

  // This is the form that the user will interact with. Includes an input and a NEXT button.
  // The input field has the 'required' keyword so they will not be able to proceed until the
  // iput field is filled. User gets a pop up that it needs to be filled out.
  return (
    <>
      <h1>How are you feeling today?</h1>
      <form onSubmit={(event) => handleNext(event)}>
        <label>Feeling?</label>
        <input
          type="text"
          placeholder="1-5"
          required
          onChange={(event) => setAddInput(event.target.value)}
        />

        <Button type="submit" variant="outlined">
          NEXT
        </Button>
      </form>
    </>
  );
}

export default FeelingInput;
