import { Todo } from "../../models/todo";
import { TodoResponse } from "../../models/todo-response";

export function adaptTodo(todo: TodoResponse): Todo {
  return {
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    completed: todo.completed
  }
}

