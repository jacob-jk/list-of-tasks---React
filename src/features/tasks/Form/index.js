import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }

    dispatch(
      addTask({
        id: nanoid(),
        content: newTaskContent.trim(),
        done: false,
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        name="task"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </Wrapper>
  );
};

export default Form;
