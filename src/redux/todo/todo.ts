import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../types";


const initialState: IState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItemTodo: (state, action) => {
            state.todo = [...state.todo, action.payload]
            return
        },
        setTodo: (state, action) => {
            const {id} = action.payload
            state.todo = state.todo.map((item) => item.id === id ? action.payload : item
            );
            return
        }
    },
})

export const {
    addItemTodo,
    setTodo
} = todoSlice.actions