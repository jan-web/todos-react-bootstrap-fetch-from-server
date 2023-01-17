import Todo from "./todo";
import { Todo as TodoType } from '../../types/todos';

type TodoListProps = {
  data: TodoType[];
  isCompletedHandler: (id: string) => void;
  deleteTodoHandler: (id: string) => void;
}

function TodosList({ data, isCompletedHandler, deleteTodoHandler }: TodoListProps) {

  return (
    <div>
      {!data.length && <h2>The list is empty</h2>}
      {data.map((todo)=> <Todo key={todo.id} data={todo} isCompletedHandler={isCompletedHandler} deleteTodoHandler={deleteTodoHandler}/>)}

    </div>
  );
}

export default TodosList;