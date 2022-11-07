import { useSelector, useDispatch } from "react-redux";
import { StyledContainer, StyledButton } from "./styled.js";
import { selectTasks, toogleHideDone, setAllDone } from "../tasksSlice.js";

const Buttons = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }
  return (
    <StyledContainer>
      <StyledButton onClick={() => dispatch(toogleHideDone())}>
        {hideDoneTasks ? "Pokaż " : "Ukryj "} ukończone
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every((task) => task.done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledContainer>
  );
};

export default Buttons;
