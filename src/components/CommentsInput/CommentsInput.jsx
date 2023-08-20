import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

function CommentsInput() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [addInput, setAddInput] = useState("");

  function handleNext(event) {
    event.preventDefault();
    console.log("inside handleNext");
    dispatch({
      type: "ADD_COMMENTS",
      payload: addInput,
    });
    history.push("/review");
  }

  function handlePrevious() {
    history.push("/supported");
  }

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={(event) => handleNext(event)}>
        <label>Comments?</label>
        <input
          type="text"
          placeholder="comments"
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

export default CommentsInput;
