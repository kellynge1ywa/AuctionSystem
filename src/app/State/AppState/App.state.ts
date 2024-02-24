import { ArtReducer } from "../Art/Reducer/Art.reducers";
import { CategoryReducer } from "../Category/Reducers/Category.reducers";
import { UsersState } from "../User/Reducer/Users.reducer";

export interface appState{
    users:UsersState
    category:CategoryReducer
    art:ArtReducer
}