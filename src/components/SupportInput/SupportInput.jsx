import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

// Another component that is the same as the previous two except for the dispatch and paths
// also includes the previous button.
function SupportInput() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [addInput, setAddInput] = useState("");

  function handleNext(event) {
    event.preventDefault();
    console.log("inside handleNext");
    dispatch({
      type: "ADD_SUPPORT",
      payload: addInput,
    });
    history.push("/comments");
  }

  function handlePrevious() {
    history.push("/understanding");
  }

  return (
    <>
      <h1>How well are you being supported?</h1>
      <form onSubmit={(event) => handleNext(event)}>
        <label>Support?</label>
        <input
          type="text"
          placeholder="1-5"
          required
          onChange={(event) => setAddInput(event.target.value)}
        />

        <Button type="submit">NEXT</Button>
      </form>
      <Button type="submit" onClick={handlePrevious}>
        PREVIOUS
      </Button>
    </>
  );
}

export default SupportInput;
