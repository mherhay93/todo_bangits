import {createSlice} from "@reduxjs/toolkit";
import {IState, IValue} from "../types";


const initialState: IState = {
    todo: [],
    trash: [],
    modalVisible: false
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItemTodo: (state, action) => {
            state.todo = [...state.todo, action.payload]
        },
        setTodo: (state, action) => {
            const {id} = action.payload
            state.todo = state.todo.map((item) => item.id === id ? action.payload : item
            );
        },
        moveToTrash: (state, action) => {
            const id = action.payload
            const trash: IValue[] = []
            const todo: IValue[] = []
            state.todo.forEach(item => item.id === id ? trash.push(item) : todo.push(item))
            state.todo = todo
            state.trash = trash
        },
        setChecked: (state, action) => {
            const {checked, id} = action.payload
            state.todo.forEach(item => item.id === id ? item.isChecked = checked : item)
        },
        setModalVisible: (state, action) => {
            state.modalVisible = action.payload
        },
        returnTodo: (state, action) => {
            const id = action.payload
            const todo = [...state.todo]
            const trash:IValue[] = []
            state.trash.forEach(item => item.id === id ? todo.push(item) : trash.push(item))
            state.todo = todo
            state.trash = trash
        },
        deleteItem: (state, action) => {
            const id = action.payload
            state.trash = state.trash.filter(item => item.id !== id)
        }
    },
})

export const {
    addItemTodo,
    setTodo,
    moveToTrash,
    setChecked,
    setModalVisible,
    returnTodo,
    deleteItem
} = todoSlice.actions