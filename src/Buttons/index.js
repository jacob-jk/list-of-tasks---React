import "./style.css";

const Buttons = (props) =>
  props.tasks.length > 0 && (
    <div className="buttons">
      <button className="buttons">
        {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons"
        disabled={props.tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
