import {AppDispatch} from "../index";
import {getLanguage, getMovie, getMovieError, getMovieSuccess} from "../Reducer/movieSlice";
import axios from "axios";
import {Apikey} from "../../Apikey";
import {getSearchError, getSearchSuccess} from "../Reducer/SearchSlice";
import {addToFavorite} from "../Reducer/FAvoriteSlice";
import {IFavorite} from "../../type";

export const SetMovie = (lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getMovie())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${lan}&page=1`)
            const {data} = responsive
            dispatch(getMovieSuccess(data.results))
        } catch (e: any) {
            dispatch(getMovieError(e.message))
        }
    }
}

export const setSearch = (name: string | undefined, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${name}&language=${lan}`)
            const {data} = res
            dispatch(getSearchSuccess(data.results))
        } catch (e: any) {
            dispatch(getSearchError(e.message))
        }
    }
}

export const language = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(getLanguage(lan))
}
;
export const setAddToFavorite = (el: IFavorite) => (dispatch: AppDispatch) => {
    dispatch(addToFavorite(el))
}