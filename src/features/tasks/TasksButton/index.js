import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

import { StyledTasksButton } from "./styled";

export const TasksButton = () => {
  const dispatch = useDispatch();
  return (
    <StyledTasksButton onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </StyledTasksButton>
  );
};
