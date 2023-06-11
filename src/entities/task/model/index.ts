import { PayloadAction, createSlice, isAction } from "@reduxjs/toolkit";

export interface TaskProps {
    id: string;
    text: string;
    completed: boolean;
}

const initialState: { data: TaskProps[] } = {
    data: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState, 
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            if(!action.payload.trim()) return

            const uniqueId = Math.random().toString(16).slice(2);
            
            state.data = [...state.data, {id: uniqueId, text: action.payload, completed: false}]
        },
        checkTask: (state, action: PayloadAction<string>) => {
            state.data = state.data.map(element => element.id === action.payload ? {...element, completed: !element.completed}: element)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(element => element.id !== action.payload)
        }
    }
})

export const { addTask, checkTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer