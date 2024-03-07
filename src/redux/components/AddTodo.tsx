import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../config/configStore";
import { addTodo } from "../modules/todos";

function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const submitBtnClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={submitBtnClick}>
        <label>제목</label>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={titleChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={contentChangeHandler}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default AddTodo;
