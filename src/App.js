import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import hello, { surname, age } from "./utils/hello";
// można też zamiast wszystkich nazw obiektu dać: * as hello

hello.hello();
console.log(hello.name);
console.log(surname, age);

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść kolację", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header tittle="Lista zadań" />

      <Section tittle="Dodaj nowe zadanie" listContent={<Form />} />

      <Section
        tittle="Lista zadań"
        listContent={<List tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
