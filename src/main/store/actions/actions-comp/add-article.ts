import { ADD_ARTICLE, ArticleContent, ArticleAction } from "../../types";

export function addArticle(payload: ArticleContent): ArticleAction  {
    return { type: ADD_ARTICLE, payload }
};