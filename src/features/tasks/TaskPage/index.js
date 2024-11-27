import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskDetails, TaskDoneStatus } from "./styled";

function SingleTask() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container tittle="Szczegóły zadania">
      <Section
        tittle={
          <TaskDetails>
            {task ? task.content : "Nie znaleziono zadania w liście"}
          </TaskDetails>
        }
        body={
          <TaskDoneStatus>
            {task ? (
              <>
                <strong>Ukończono:</strong> {""}
                {task.done ? "Tak" : "Nie"}
              </>
            ) : (
              "...zatem nie musisz go robić!"
            )}
          </TaskDoneStatus>
        }
      />
    </Container>
  );
}

export default SingleTask;
