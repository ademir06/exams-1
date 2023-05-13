import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MovieReducer from "./Reducer/movieSlice";
import SearchReducer from "./Reducer/SearchSlice";
import FavoriteReducer from "./Reducer/FAvoriteSlice";

export const rootState = combineReducers({
    MovieReducer,
    SearchReducer,
    FavoriteReducer,
})


export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rooReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type AppDispatch = appState['dispatch']