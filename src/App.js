import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Introduction from "./features/introduction/IntroductionPage";
import TasksPage from "./features/tasks/TasksPage";
import SingleTask from "./features/tasks/TaskPage";
import { toIntroduction, toTask, toTasks } from "./routes";
import Navigation from "./features/tasks/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <SingleTask />
        </Route>
        <Route path={toIntroduction()}>
          <Introduction />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
