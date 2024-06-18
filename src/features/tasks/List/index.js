import { useDispatch, useSelector } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled";
import { selectTasksState, toggleTask, removeTask } from "../tasksSlice";

const List = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTask(task.id))}>
            {task.done ? " ✔ " : ""}
          </Button>
          <Content $done={task.done}>{task.content}</Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            ✖
          </Button>
        </Item>
      ))}
    </TasksList>
  );
};

export default List;
