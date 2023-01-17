import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuid } from 'uuid';
import TodoForm from './components/todos/todoForm';
import TodosActions from './components/todos/todosAction';
import TodosList from './components/todos/todosList';
import { Todo} from './types/todos';
import GetTodoFromServer from './services/api';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [idTodo, setIdTodo] = useState(1);
  const [error, setError] = useState('');
  async function fetchTodoHandler () {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1/todos?id=${idTodo}`);
    if(idTodo > 19) {
      setIdTodo(1);
    } else {
      setIdTodo(idTodo+1);
    }
    const data = await res.json();
    setTodos(
      [...todos,
      {
        id: uuid(),
        name: data[0].title,
        isCompleted: data[0].completed
      }]
    )
  }
  useEffect(() => {

      fetchTodoHandler();

  },[]);
  const addTodoHandler = (todoText: string) => {
    setTodos(
      [...todos,
      {
        id: uuid(),
        name: todoText,
        isCompleted: false
      }]
    )
  }
  const isCompletedHandler = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    )
  }
  const deleteTodoHandler = (id: string) => {
    setTodos(
      todos.filter((todo) => todo.id !== id))
  }
  const deleteAllTodosHandler = () => {
    setTodos([]);
  }
  const deleteCompletedTodos = () => {
    setTodos(
      todos.filter((todo) => !todo.isCompleted))
  }
  const completedTodosAmount = todos.filter((todo) => todo.isCompleted).length;

  const getTodosId = () => {
    let idArr = [];
    for (let i = 1; i <= 5; i++) {
      const todoId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      idArr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
      console.log('GetTodoFromServer = ', GetTodoFromServer(todoId));
    }
  }
  return (
    <Container className="text-center mt-5">
      <h1>Todos</h1>
      <Row >
        <Col className='col-0 col-md-3' />
        <Col className='col-12 col-md-6'>
          <TodoForm addTodo={addTodoHandler} fetchTodo={fetchTodoHandler}/>
          {!!todos.length && <TodosActions deleteAllTodosHandler={deleteAllTodosHandler} deleteCompletedTodos={deleteCompletedTodos} />
          }
          {error && <p>Error message:<b> {error}</b></p>}
          <TodosList data={todos} isCompletedHandler={isCompletedHandler} deleteTodoHandler={deleteTodoHandler} />
          {completedTodosAmount > 0 && <h2>{`The ${completedTodosAmount} ${completedTodosAmount === 1 ? 'todo' : 'todos'} completed`}</h2>}
        </Col>
        <Col className='col-0 col-md-3' />
      </Row>
    </Container>
  );
}

export default App;
