import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

function SuccessPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleNewFeedback() {
    dispatch({
      type: "REMOVE_FEEDBACK",
    });
    history.push("/");
  }

  return (
    <>
      <h1>Feedback!</h1>
      <h1>Thank You!</h1>
      <Button type="submit" onClick={handleNewFeedback}>
        Leave New Feedback
      </Button>
    </>
  );
}

export default SuccessPage;
