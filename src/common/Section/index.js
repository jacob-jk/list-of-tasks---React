import { Wrapper, SectionBox } from "./styled";

const Section = ({ tittle, extraHeaderContent, body }) => (
  <Wrapper>
    <SectionBox>
      <h2>{tittle}</h2>
      {extraHeaderContent}
    </SectionBox>
    {body}
  </Wrapper>
);
export default Section;
