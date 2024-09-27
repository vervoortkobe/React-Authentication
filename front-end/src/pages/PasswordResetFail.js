import { useHistory } from "react-router-dom";

export const PasswordResetFail = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Uh oh...</h1>
      <p>Something went wrong while trying to reset yoor password.</p>
      <button onClick={() => history.push("/signup")}>Back to log in</button>
    </div>
  );
};
