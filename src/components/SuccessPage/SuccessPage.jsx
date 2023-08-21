import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

// our success page will display some text thanking the user
// then they will have the option to click the Leave new feedback button
// and start the form from the beginning
function SuccessPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  // This dispatch will clear the users info from our reducer so they can start again from the original state.
  function handleNewFeedback() {
    dispatch({
      type: "REMOVE_FEEDBACK",
    });
    history.push("/");
  }

  return (
    <>
      <h1>Feedback!</h1>
      <h1>Your information has been submitted</h1>
      <h1>Thank You!</h1>
      <Button type="submit" onClick={handleNewFeedback}>
        Leave New Feedback
      </Button>
    </>
  );
}

export default SuccessPage;
