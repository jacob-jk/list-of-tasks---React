import "./style.css";

const Buttons = (props) => {
  if (props.tasks.lenght !== 0)
    return (
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
};

export default Buttons;
