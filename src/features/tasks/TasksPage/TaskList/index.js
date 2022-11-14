import { useSelector, useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import {
  selectTasksState,
  toogleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";
import useQueryParamater from "../../useQueryParameter.js";
import { List, Item, Button, Content, StyledLink } from "./styled.js";

const TaskList = () => {
  const query = useQueryParamater(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const { hideDoneTasks } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button changeDone onClick={() => dispatch(toogleTaskDone(task.id))}>
            {task.done ? "✔️" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
