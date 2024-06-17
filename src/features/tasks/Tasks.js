import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container tittle="Lista zadań">
      <Section tittle="Dodaj nowe zadanie" listContent={<Form />} />

      <Section
        tittle="Lista zadań"
        listContent={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
