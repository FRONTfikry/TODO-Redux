import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface TaskProps {
    id: string
    text: string
    completed: boolean
}


interface stateProps {
    data: TaskProps[]
}


const initialState: stateProps = {
    data: []
}


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState, 
    reducers: {
        addTask: (state, action: PayloadAction<Pick<TaskProps, "text">>) => {
            if(!action.payload.text.trim()) return

            const uniqueId = Math.random().toString(16).slice(2);
            
            state.data = [...state.data, {id: uniqueId, text: action.payload.text, completed: false}]
        },
        checkTask: (state, action: PayloadAction<Pick<TaskProps, "id">>) => {
            state.data = state.data.map(element => element.id === action.payload.id ? {...element, completed: !element.completed}: element)
        },
        deleteTask: (state, action: PayloadAction<Pick<TaskProps, "id">>) => {
            state.data = state.data.filter(element => element.id !== action.payload.id)
        },
        editTask: (state, action: PayloadAction<Pick<TaskProps, "id" | "text">>) => {
            if(!action.payload.text.trim()) return

            state.data = state.data.map(element => element.id === action.payload.id ? {...element, text: action.payload.text}: element)
        }
    }
})


export const { addTask, checkTask, deleteTask, editTask } = tasksSlice.actions


export default tasksSlice.reducer