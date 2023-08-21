import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "@mui/material/Button";

function ReviewFeedback() {
  const feedback = useSelector((store) => store.feedback); // Selector that acceses the information in the 'store'
  const history = useHistory(); // lets us access our nav/pathing

  // bundles up all of our feeback reducer information into an object of key/value pairs.
  let objectToSend = {
    feeling: feedback[0],
    understanding: feedback[1],
    support: feedback[2],
    comments: feedback[3],
    flagged: false,
  };

  // Our function thats triggered by our button click. Sends a POST to our router
  // includes our object of key/value pairs
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

    history.push("/success"); // sends us back to the "home" page
  }

  // our return will show each input the user made and list them on this page.
  // Then the user can either submit OR the can go to the previous page and change inputs if needed.
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

      <Button type="submit" onClick={handleNext}>
        SUBMIT
      </Button>
      <Button type="submit" onClick={handlePrevious}>
        PREVIOUS
      </Button>
    </>
  );
}

export default ReviewFeedback;
