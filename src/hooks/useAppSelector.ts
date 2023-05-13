import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rooReducer} from "../store";

export const useAppSelector: TypedUseSelectorHook<rooReducer> = useSelector