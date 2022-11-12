import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  setAllDone,
  toogleHideDone,
} from "../../tasksSlice.js";
import { StyledContainer, StyledButton } from "./styled.js";

const Buttons = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasksState);
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
