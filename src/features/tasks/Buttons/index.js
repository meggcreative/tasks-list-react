import { StyledContainer, StyledButton } from "./styled.js";

const Buttons = ({
  tasks,
  hideDoneTasks,
  toggleHideDoneTasks,
  setAllTasksDone,
}) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <StyledContainer>
      <StyledButton onClick={toggleHideDoneTasks}>
        {hideDoneTasks ? "Pokaż " : "Ukryj "} ukończone
      </StyledButton>
      <StyledButton
        onClick={setAllTasksDone}
        disabled={tasks.every((task) => task.done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledContainer>
  );
};

export default Buttons;
