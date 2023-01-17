
import { ImPacman, ImBin } from "react-icons/im";
import Badge from 'react-bootstrap/Badge';
import styles from './todosAction.module.css'

type TodosActionsProps = {
  deleteAllTodosHandler: () => void;
  deleteCompletedTodos: () => void;
}

function TodosActions({ deleteAllTodosHandler, deleteCompletedTodos }: TodosActionsProps) {
  return (
    <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
      <Badge
        className={`fs-3 border border-dark ` + styles.button}
        bg="Light"
        title='Delete all Todos'
        onClick={deleteAllTodosHandler}
      >  <ImBin /></Badge>
      <Badge
        className={`fs-3 border border-dark ` + styles.button}
        bg="Light"
        title='Clear completed todos'
        onClick={deleteCompletedTodos}
        ><ImPacman /></Badge>
    </div>

  );
}

export default TodosActions;