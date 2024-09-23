import { useDispatch, useSelector } from "react-redux";
import { TasksList, Item, Content, Button, ListPosition } from "./styled";
import {
  toggleTask,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { searchQueryParamName } from "../Search";

const List = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));

  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTask(task.id))}>
            {task.done ? " ✔ " : ""}
          </Button>
          <Content $done={task.done}>
            <ListPosition to={`/zadania/${task.id}`}>
              {task.content}
            </ListPosition>
          </Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            ✖
          </Button>
        </Item>
      ))}
    </TasksList>
  );
};

export default List;
