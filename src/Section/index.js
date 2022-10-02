import "./style.css";

const Section = (props) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{props.title}</h2>
      {props.extraHeaderContent}
    </header>
    <div className="section__content">{props.sectionContent}</div>
  </section>
);

export default Section;
