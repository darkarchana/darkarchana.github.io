import { articleReducer } from "./reducers-comp/article-reducer";
import { imageReducer } from "./reducers-comp/image-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    articles: articleReducer,
    image: imageReducer
})

export type AppState = ReturnType<typeof rootReducer>