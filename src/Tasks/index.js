import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__list${
          task.done && hideDoneTasks ? " tasks__list--hidden" : ""
        }`}
      >
        <button
          className="tasks__button tasks__button--changeDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔️" : ""}
        </button>
        <span className={`${task.done ? " tasks__list--done" : ""}`}>
          {task.content}
        </span>
        <button className="tasks__button" onClick={() => removeTask(task.id)}>
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
