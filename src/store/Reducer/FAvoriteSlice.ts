import {IFavorite} from "../../type";
import {createReducer, createSlice} from "@reduxjs/toolkit";

interface FavoriteSlice {
    favorite: IFavorite[]
    loading: boolean
    error: string
}

const initialState: FavoriteSlice = {
    favorite: [],
    loading: false,
    error: ''
}

export const FavoriteReducer = createSlice({
    name: 'Favorite',
    initialState,
    reducers: {
        addToFavorite(state, action) {
            const FoundFavorite = state.favorite.find(el => el.id === action.payload.id)
            if (FoundFavorite) {
                state.favorite = state.favorite.filter(el => el.id !== action.payload.id)
            } else {
                state.favorite = [...state.favorite, {...action.payload}]
            }
        }
    }
})

export const {addToFavorite} = FavoriteReducer.actions
export default FavoriteReducer.reducer