export type Todo = {
  id: string;
  name: string;
  isCompleted: boolean;
}
export type TodoFromServer = {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
}