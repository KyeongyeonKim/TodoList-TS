import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../config/configStore";
import { addTodo } from "../modules/todos";
import styled from "styled-components";

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
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }
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
    <StInputArea>
      <form onSubmit={submitBtnClick}>
        <StLabel>제목</StLabel>
        <StInput
          type="text"
          placeholder="제목"
          maxLength={20}
          value={title}
          onChange={titleChangeHandler}
        />
        <StLabel>내용</StLabel>
        <StInput
          type="text"
          placeholder="내용"
          maxLength={50}
          value={content}
          onChange={contentChangeHandler}
        />
        <StButton type="submit">추가하기</StButton>
      </form>
    </StInputArea>
  );
}

export default AddTodo;

const StInputArea = styled.div`
  background-color: rgba(204, 204, 204, 0.5);
  border-radius: 10px;
  padding: 25px;
`;

const StLabel = styled.label`
  font-weight: bold;
  margin-right: 20px;
`;

const StInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-right: 20px;
`;

const StButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: #006633;
  color: #fff;
  cursor: pointer;
`;
