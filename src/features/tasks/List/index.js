import { useDispatch, useSelector } from "react-redux";
import { TasksList, Item, Content, Button, ListPosition } from "./styled";
import {
  toggleTask,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../tasksSlice";
import { searchQueryParamName } from "../Search";
import { toTask } from "../../../routes";
import { useQueryParameter } from "../queryParams";

const List = () => {
  const query = useQueryParameter(searchQueryParamName);
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
            <ListPosition to={toTask({ id: task.id })}>
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
