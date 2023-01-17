import { useState } from "react";



function GetTodoFromServer(todoId: number) {
  const [todo, setTodo] = useState('');


    (async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const todoRes = await res.json();
        // setPosts(posts);
        setTodo(todoRes)
      }
      catch (error) {
        // setError((error as Error).message)
      }
      // setIsLoading(false);
    })();



  return todo;
}

export default GetTodoFromServer;