import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../config/configStore";
import { Todo, switchTodo, removeTodo } from "../modules/todos";

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
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h2>{isActive ? "Working... 🔥" : "Done... ✅"}</h2>
      <div>
        {todos
          .filter((todo: Todo) => todo.isDone === !isActive)
          .map((list) => {
            return (
              <div key={list.id}>
                <div>{list.title}</div>
                <div>{list.content}</div>
                <button onClick={() => deleteBtnHandler(list.id)}>
                  삭제하기
                </button>
                <button onClick={() => onChangeHandler(list.id)}>
                  {isActive ? "완료" : "취소"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
