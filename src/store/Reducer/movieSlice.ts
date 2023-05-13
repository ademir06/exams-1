import {IMovie} from "../../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMovieSlice {
    movies: IMovie[]
    loading: boolean
    error: string
    language: string
}

const initialState: IMovieSlice = {
    movies: [],
    loading: false,
    error: '',
    language: ''
}


export const MovieReducer = createSlice({
    name: 'MOVIE',
    initialState,
    reducers: {
        getMovie(state) {
            state.loading = true
        },
        getMovieSuccess(state, action: PayloadAction<IMovie[]>) {
            state.loading = false
            state.movies = action.payload
            state.error = ''
        },
        getMovieError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.movies = []
            state.loading = false
        },
        getLanguage(state, action) {
            state.language = action.payload
        }
    }
})

export const {getMovie, getMovieSuccess, getMovieError,getLanguage} = MovieReducer.actions

export default MovieReducer.reducer