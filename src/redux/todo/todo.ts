import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../types";


const initialState:IState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItemTodo: (state, action) => {
            return {...state, todo: state.todo.concat(action.payload)}
        }
    }
})

export const {
    addItemTodo
} = todoSlice.actions