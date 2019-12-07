import { 
  ADD_ARTICLE, 
  ArticleContent, 
  ArticleAction 
} from "../../types";

const initialState : ArticleContent[] = [];

export function articleReducer (state = initialState, action: ArticleAction): ArticleContent[] {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload]
    default:
      return state;
  }
}

