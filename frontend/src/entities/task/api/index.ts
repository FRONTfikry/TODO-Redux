import { baseApi } from 'shared/api'
import { TaskProps } from '../model'

import { TASKS } from 'shared/api/tags'

export const tasksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query<TaskProps[], void>({
            query: () => ({
                url: "tasks"
            }),
            providesTags: [TASKS]
        }),
        addTask: builder.mutation<void, Pick<TaskProps, 'text'>>({
            query: ({text}) => ({
                url: "tasks",
                method: "POST",
                body: {text}
            }),
            invalidatesTags: [TASKS]
        }),
        toggleTask: builder.mutation<void, Pick<TaskProps, 'id'>>({
            query: ({id}) => ({
                url: `tasks/toggle/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: [TASKS]
        }),
        editTask: builder.mutation<void, Pick<TaskProps, 'id' | "text">>({
            query: ({id, text}) => ({
                url: `tasks/edit/${id}`,
                method: "PATCH",
                body: {text}
            }),
            invalidatesTags: [TASKS]
        }),
        deleteTask: builder.mutation<void, Pick<TaskProps, 'id'>>({
            query: ({id}) => ({
                url: `tasks/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [TASKS]
        })
    })
})

export const { 
    useGetTasksQuery,
    useAddTaskMutation, 
    useToggleTaskMutation, 
    useEditTaskMutation,
    useDeleteTaskMutation
} = tasksApi