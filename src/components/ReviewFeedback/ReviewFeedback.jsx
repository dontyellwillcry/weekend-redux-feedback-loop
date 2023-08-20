import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function ReviewFeedback() {
  const feedback = useSelector((store) => store.feedback);

  const history = useHistory();

  let objectToSend = {
    feeling: feedback[0],
    understanding: feedback[1],
    support: feedback[2],
    comments: feedback[3],
    flagged: false,
    // date: "01-01-2023"
  }

  function handleNext(event) {
    event.preventDefault();
    console.log("inside handleNext");
    axios
      .post("/feedback", objectToSend)
      .then((response) => {
        console.log("POST request ✅");
      })
      .catch((error) => {
        console.log(`Error making POST :  ${error}`);
      });

    history.push("/success");
  }

  function handlePrevious() {
    history.push("/comments");
  }

  return (
    <>
      <h1> Review </h1>
      <ul>
        <li>Feelings: {feedback[0]}</li>
        <li>Understanding: {feedback[1]}</li>
        <li>Support: {feedback[2]}</li>
        <li>Comments: {feedback[3]}</li>
      </ul>
      
      <button type="submit" onClick={handleNext}>
        SUBMIT
      </button>
      <button type="submit" onClick={handlePrevious}>
        PREVIOUS
      </button>
    </>
  );
}

export default ReviewFeedback;
