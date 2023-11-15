import { configureStore } from "@reduxjs/toolkit";
import {todoSlice} from "./todo/todo";


export function makeStore () {
    return configureStore( {
        reducer: {
            [todoSlice.name]:todoSlice.reducer
        }
    } )
}

const store = makeStore()
export default store