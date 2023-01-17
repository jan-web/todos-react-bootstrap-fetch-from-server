import Card from 'react-bootstrap/Card';
import { BiNotepad, BiTrash, BiListCheck } from "react-icons/bi";
import styles from './todo.module.css';
import { Todo as TodoType } from '../../types/todos';

type TodoProps = {
  data: TodoType;
  isCompletedHandler: (id: string) => void;
  deleteTodoHandler: (id: string) => void;
}

function Todo({ data, isCompletedHandler, deleteTodoHandler }: TodoProps) {
  return (
    <Card className={`d-flex flex-row align-items-center text-left mt-3 ${data.isCompleted ? styles.isCompleted : ''}`}>
      <BiNotepad className={`fs-3 ms-3 ` + styles.iconNotepad}/>
      <Card.Body className='flex-grow-0'>{data.name}</Card.Body>
      <BiListCheck className={`me-3 ms-auto ` + styles.iconCheck} onClick={() => isCompletedHandler(data.id)} />
      <BiTrash className={`me-3 ` + styles.iconTrash} onClick={()=>deleteTodoHandler(data.id)}/>
    </Card>
  );
}

export default Todo;