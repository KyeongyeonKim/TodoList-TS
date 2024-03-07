import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../config/configStore";
import { Todo, switchTodo, removeTodo } from "../modules/todos";
import styled from "styled-components";

interface TodoListProps {
  isActive: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isActive }) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onChangeHandler = (id: string) => {
    dispatch(switchTodo(id));
  };

  const deleteBtnHandler = (id: string) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) dispatch(removeTodo(id));
  };

  return (
    <div>
      <StH2>{isActive ? "Working... 🔥" : "Done... ✅"}</StH2>
      <StTodoList>
        {todos
          .filter((todo: Todo) => todo.isDone === !isActive)
          .map((list) => {
            return (
              <StTodo key={list.id}>
                <p>{list.title}</p>
                <p>{list.content}</p>
                <FlexButtonBox>
                  <StDeleteBtn onClick={() => deleteBtnHandler(list.id)}>
                    삭제하기
                  </StDeleteBtn>
                  <StSwitchBtn onClick={() => onChangeHandler(list.id)}>
                    {isActive ? "완료" : "취소"}
                  </StSwitchBtn>
                </FlexButtonBox>
              </StTodo>
            );
          })}
      </StTodoList>
    </div>
  );
};

export default TodoList;

const StTodoList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StH2 = styled.h2`
  margin-left: 20px;
`;

const StTodo = styled.div`
  border: 2px solid #006666;
  border-radius: 10px;
  width: 200px;
  padding: 20px;
  margin: 10px 20px;
  word-break: break-all;
`;

const FlexButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StDeleteBtn = styled.button`
  border: 2px solid red;
  border-radius: 10px;
  background-color: #fff;
  width: 49%;
  height: 30px;
  cursor: pointer;
`;

const StSwitchBtn = styled.button`
  border: 2px solid #006666;
  border-radius: 10px;
  background-color: #fff;
  width: 49%;
  height: 30px;
  cursor: pointer;
`;
