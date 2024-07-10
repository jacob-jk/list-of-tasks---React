import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectTasks,
  selectHideDone,
  selectNonEmptyTasks,
  selectEveryTaskDone,
  fetchExampleTasks,
} from "../tasksSlice";
import { useEffect } from "react";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(selectTasks);
  const nonEmptyTasks = useSelector(selectNonEmptyTasks);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const dispatch = useDispatch();

  useEffect(() => {
    const getEffect = () => {
      if (nonEmptyTasks && everyTaskDone) {
        window.alert("Brawo! Zadania zostały ukończone.");
      }
      return;
    };

    setTimeout(getEffect, 2000);
  }, [tasks, nonEmptyTasks, everyTaskDone]);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {nonEmptyTasks && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            $disabled={everyTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
