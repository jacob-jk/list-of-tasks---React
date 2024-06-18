import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectTasksObjects,
} from "../tasksSlice";
import { useEffect } from "react";

const Buttons = () => {
  const { hideDone } = useSelector(selectTasksState);
  const tasks = useSelector(selectTasksObjects);
  const dispatch = useDispatch();

  useEffect(() => {
    const getEffect = () => {
      if (tasks.every(({ done }) => done === true)) {
        window.alert("Brawo! Zadania zostały ukończone.");
      }
      return;
    };

    setTimeout(getEffect, 2000);
  }, [tasks]);

  return (
    tasks.length > 0 && (
      <Wrapper>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          $disabled={tasks.every(({ done }) => done)}
          onClick={() => dispatch(setAllDone(), console.log("nic"))}
        >
          Ukończ wszystkie
        </Button>
      </Wrapper>
    )
  );
};

export default Buttons;
