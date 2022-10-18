import { List, Item, Button, Content } from "./styled.js";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDoneTasks}>
        <Button changeDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔️" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>🗑</Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
