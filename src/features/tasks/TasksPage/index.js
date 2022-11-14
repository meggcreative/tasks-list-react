import Form from "./Form";
import Header from "../../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Search from "./Search";
import { TasksButton } from "./TasksButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<TasksButton />}
        sectionContent={<Form />}
      />
      <Section title="Wyszukiwarka" sectionContent={<Search />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        sectionContent={<TaskList />}
      />
    </Container>
  );
}

export default TasksPage;
