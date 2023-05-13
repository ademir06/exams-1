import {ISearch} from "../../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISearchSlice {
    search: ISearch[]
    loading: boolean
    error: string
}

const initialState: ISearchSlice = {
    search: [],
    loading: false,
    error: ''
}

export const SearchReducer = createSlice({
    name: 'SEARCH',
    initialState,
    reducers: {
        getSearch(state) {
            state.loading = true
        },
        getSearchSuccess(state, action: PayloadAction<ISearch[]>) {
            state.loading = false
            state.search = action.payload
            state.error = ''
        },
        getSearchError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
            state.search = []
        }
    }
})

export const {getSearch, getSearchSuccess, getSearchError} = SearchReducer.actions

export default SearchReducer.reducer