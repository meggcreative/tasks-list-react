import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
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
