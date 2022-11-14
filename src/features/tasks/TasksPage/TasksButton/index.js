import { useDispatch, useSelector } from "react-redux";
// import { select } from "redux-saga/effects";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

import { StyledTasksButton } from "./styled";

export const TasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  if (loading) {
    return (
      <StyledTasksButton
        disabled={true}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        Ładowanie...
      </StyledTasksButton>
    );
  }

  return (
    <StyledTasksButton onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </StyledTasksButton>
  );
};
