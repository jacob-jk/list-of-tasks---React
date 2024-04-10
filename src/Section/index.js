import { Wrapper, SectionBox } from "./styled";

const Section = ({ tittle, listContent, extraHeaderContent }) => (
  <Wrapper>
    <SectionBox>
      <h2>{tittle}</h2>
      {extraHeaderContent}
    </SectionBox>
    {listContent}
  </Wrapper>
);
export default Section;
