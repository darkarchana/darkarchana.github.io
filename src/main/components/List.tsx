import React from "react";
import { ArticleContent } from "../store/types";
import { AppState } from "../store/reducers";
import { useSelector } from "react-redux";

function List() {
  const articles: ArticleContent[] = useSelector((state: AppState) => state.articles);
  
  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default List;
