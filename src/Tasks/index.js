import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__list${
          task.done && props.hideDoneTasks ? " tasks__list--hidden" : ""
        }`}
      >
        <button className="tasks__button tasks__button--changeDone">
          {task.done ? "✔️" : ""}
        </button>
        <span className={`${task.done ? " tasks__list--done" : ""}`}>
          {task.content}
        </span>
        <button className="tasks__button">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
