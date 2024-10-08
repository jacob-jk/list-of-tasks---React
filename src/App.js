import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Introduction from "./features/introduction/IntroductionPage";
import TasksPage from "./features/tasks/TasksPage";
import SingleTask from "./features/tasks/TaskPage/TaskPage";
import { StyledList, StyledNav, StyledNavLink } from "./styledNavigation";

function App() {
  return (
    <HashRouter>
      <StyledNav>
        <StyledList>
          <li>
            <StyledNavLink to="/opis">Wprowadzenie</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </li>
        </StyledList>
      </StyledNav>
      <Switch>
        <Route path="/zadania/:id">
          <SingleTask />
        </Route>
        <Route path="/opis">
          <Introduction />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route>
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
