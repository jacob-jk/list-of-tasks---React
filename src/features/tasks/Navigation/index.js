import { toIntroduction, toTasks } from "../../../routes";
import { StyledList, StyledNav, StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNav>
    <StyledList>
      <li>
        <StyledNavLink to={toIntroduction()}>Wprowadzenie</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </li>
    </StyledList>
  </StyledNav>
);

export default Navigation;
