export const ADD_ARTICLE = "ADD_ARTICLE";

export interface ArticleContent {
    id: number
    title: string
}

interface AddArticleAction {
    type: typeof ADD_ARTICLE
    payload: ArticleContent
}

export type ArticleAction = AddArticleAction