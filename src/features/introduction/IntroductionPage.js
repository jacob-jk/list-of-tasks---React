import Container from "../../common/Container";
import Section from "../../common/Section";
import { Description } from "./styled";

function Introduction() {
  return (
    <Container tittle="Wprowadzenie">
      <Section
        tittle="Lista zadań"
        body={
          <Description>
            Masz problemy z organizacją swojej pracy? Oto nowo zaprojektowane
            narzędzie, które pomoże Ci w zarządzaniu nadchodzącymi i
            zrealizowanymi wydarzeniami - lista zadań umożliwiająca użytkownikom
            oznaczanie wykonanych i oczekujących zadań!
          </Description>
        }
      />
    </Container>
  );
}

export default Introduction;
