import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './todosAction.module.css';

type TodoFormProps = {
  addTodo: (todoText: string) => void;
  fetchTodo: () => Promise<void>;
}


function TodoForm({ addTodo, fetchTodo }: TodoFormProps) {

  const [inputText, setInputText] = useState('');
  const onInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }
  const onSubmitForm = () => {
    addTodo(inputText);
    setInputText('');
  }
  const onPressEnter = ({ key }: any) => {
    if (key === 'Enter') {
      onSubmitForm();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', onPressEnter);
    return () => {
      window.removeEventListener('keydown', onPressEnter);
    }
  });

  return (
    <div className="d-flex gap-3">
      <Form.Control
        type="input"
        placeholder="input todo"
        value={inputText}
        onChange={onInputText} />

      <Button
        variant="Light"
        className={`border border-dark ` + styles.button}
        onClick={onSubmitForm}
        disabled={inputText === '' ? true: false}>Add Todo</Button>
      <Button
        variant="Light"
        className={`border border-dark ` + styles.button}
        onClick={fetchTodo}>Fetch Todo From Server</Button>
    </div>

  );
}

export default TodoForm;