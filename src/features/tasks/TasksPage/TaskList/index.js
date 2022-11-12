import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectTasksState,
  toogleTaskDone,
  removeTask,
} from "../../tasksSlice.js";
import { List, Item, Button, Content } from "./styled.js";

const TaskList = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button changeDone onClick={() => dispatch(toogleTaskDone(task.id))}>
            {task.done ? "✔️" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
