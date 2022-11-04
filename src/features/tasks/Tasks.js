import { useState } from "react";
import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
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
          <TaskList
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

export default Tasks;
