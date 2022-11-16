import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./features/tasks/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { StyledNavLink } from "./styled";

function App() {
  return (
    <HashRouter>
      <Navigation
        bodyNavigationList={
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        }
        bodyNavigationList1={
          <StyledNavLink to="/autor"> O autorze</StyledNavLink>
        }
      />
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
