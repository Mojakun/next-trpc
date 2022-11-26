import React from 'react'
import { trpc } from '../utils/trpc'

export const TaskList = () => {
  const { data, isLoading, error } = trpc.todo.getTodoList.useQuery()
  if (isLoading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      {data.map(todo =>
      (
        <>
          <div className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 container mx-auto mb-5 ${todo.completed ? 'bg-emerald-300' : ''}`}>
            <p className="text-3xl font-bold text-blue-900">{todo.id}</p>
            <p className='break-words'>{todo.title}</p>
          </div>
        </>
      ))
      }
    </>
  )
}
