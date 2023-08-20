import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

function UnderstandingInput() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [addInput, setAddInput] = useState("");

  function handleNext(event) {
    event.preventDefault();
    console.log("inside handleNext");
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: addInput,
    });
    history.push("/supported");
  }

  function handlePrevious() {
    history.push("/");
  }

  return (
    <>
      <h1>How Well are you understanding the content?</h1>
      <form onSubmit={(event) => handleNext(event)}>
        <label>Understanding?</label>
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

export default UnderstandingInput;
