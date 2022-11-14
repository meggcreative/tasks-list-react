import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, StyledButton } from "./styled.js";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!newTaskContent.trim()) {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        autoFocus
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <StyledButton onClick={focusOnInput}>Dodaj zadanie</StyledButton>
    </StyledForm>
  );
};

export default Form;
