import { ContainerBox } from "./styled";

const Container = ({ children, tittle }) => (
  <ContainerBox>
    <header>
      <h1>{tittle}</h1>
    </header>
    <div>{children}</div>
  </ContainerBox>
);

export default Container;
