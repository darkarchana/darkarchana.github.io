import React, { useState } from "react";
import { ArticleContent } from "../store/types";
import { useDispatch } from "react-redux";
import { addArticle } from "../store/actions";


function Form() {
  const initialState: ArticleContent = {
    id: 0,
    title: ""
  };

  const [article, setArticle] = useState(initialState);
  const dispatch = useDispatch();
  const {title} = article;

  const submitArticle = (event: any) => {
    event.preventDefault();
    dispatch(addArticle(article));
  }

  const changeArticle = (event: any) => {
    setArticle({ id: event.target.value, title: event.target.value });
  }

  return (
    <form onSubmit={submitArticle}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id={title}
          value={title}
          onChange={changeArticle}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
}

export default Form;
