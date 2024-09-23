import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styled";
import { fetchExampleTasks, selectLoadingState } from "../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector(selectLoadingState);

  return (
    <Button
      onClick={() => dispatch(fetchExampleTasks())}
      $disabled={loadingState}
    >
      {loadingState ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default ExampleTasksButton;
