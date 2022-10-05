import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks }) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="buttons">
      <button onClick={toggleHideDoneTasks} className="buttons__button">
        {hideDoneTasks ? "Pokaż " : "Ukryj "} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every((task) => task.done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
