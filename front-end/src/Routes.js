import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogInPage } from "./pages/LoginPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { SignUpPage } from "./pages/SigUpPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserInfoPage />
        </Route>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
