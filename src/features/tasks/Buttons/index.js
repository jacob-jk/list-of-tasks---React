import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Wrapper>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        $disabled={tasks.every(({ done }) => done)}
        onClick={() => setAllDone()}
      >
        Ukończ wszystkie
      </Button>
    </Wrapper>
  );

export default Buttons;
