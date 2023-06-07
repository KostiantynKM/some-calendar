import {combineReducers} from "redux";
import {calendarReducer} from "./calendarReducer";
import {todoReducer} from "./todoReducer";


export const rootReducer = combineReducers({
    calendar: calendarReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
