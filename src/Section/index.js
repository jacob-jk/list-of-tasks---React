import "./style.css";

const Section = ({ tittle, listContent, extraHeaderContent }) => (
  <section className="section">
    <div className="section__header">
      <h2>{tittle}</h2>
      {extraHeaderContent}
    </div>
    {listContent}
  </section>
);
export default Section;
