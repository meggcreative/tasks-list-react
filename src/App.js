import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState(localStorageTasks);

  const pushTaskstoLocalStorage = () => {
    if (tasks.lenght === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(pushTaskstoLocalStorage, [tasks]);

  const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));

  const toggleHideDoneTasks = () =>
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };
  const addNewTask = (newTaskContent) => {
    if (newTaskContent.trim() === "") {
      return;
    }
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        content: newTaskContent,
        done: false,
      },
    ]);
  };
  const setAllTasksDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        sectionContent={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDoneTasks={toggleHideDoneTasks}
            setAllTasksDone={setAllTasksDone}
          />
        }
        sectionContent={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;
