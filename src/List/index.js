import "./style.css";

const List = ({ tasks, hideDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item${
          task.done && hideDone ? " list__item--done " : ""
        }`}
      >
        <button
          className="list__buttonTask 
        list__buttonTask--done"
        >
          {task.done ? " ✔ " : ""}
        </button>
        <span
          className={`"list__content 
        ${task.done ? "list__content--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          className="list__buttonTask 
        list__buttonTask--remove"
        >
          ✖
        </button>
      </li>
    ))}
  </ul>
);

export default List;
