import { adaptTodo } from "../../lib/todo/adapt-todo";
import { TodoResponse } from "../../models/todo-response";
import { router, publicProcedure } from "../trpc";

export const todoRouter = router({
  getTodoList: publicProcedure
    .query(async () => {
      const apiRequest = (): Promise<TodoResponse[]> => fetch('https://jsonplaceholder.typicode.com/todos').then((x) => x.json());
      const todoList = await apiRequest()
      return todoList.slice(0, 5).map(todo => {
        return adaptTodo(todo)
      })
    }),
});