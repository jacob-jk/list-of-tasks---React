import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Search from "./Search";
import Section from "../../common/Section";
import Container from "../../common/Container";
import ExampleTasksButton from "./Buttons/ExampleTasksButton";

function TasksPage() {
  return (
    <Container tittle="Lista zadań">
      <Section
        tittle="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />

      <Section tittle="Wyszukiwarka" body={<Search />} />

      <Section
        tittle="Lista zadań"
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
