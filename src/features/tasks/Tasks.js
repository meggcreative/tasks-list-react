import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { TasksButton } from "./TasksButton";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<TasksButton />}
        sectionContent={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        sectionContent={<TaskList />}
      />
    </Container>
  );
}

export default Tasks;
