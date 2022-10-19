import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const { tasks, removeTask, toggleTaskDone, addNewTask, setAllTasksDone } =
    useTasks();

  const toggleHideDoneTasks = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
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
