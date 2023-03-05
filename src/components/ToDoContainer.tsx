import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ITodosType } from '../utils/todos';
import { ToDo } from './ToDo';
import { WrapperToDo, StyledTitle } from './ToDoContainer.styles';
import { ToDoInput } from './ToDoInput';

export const ToDoContainer = () => {
  const todosData = useSelector<RootState>((state) => state.todos.todos);

  return (
    <WrapperToDo>
      <StyledTitle>Your todos:</StyledTitle>
      <ToDoInput />
      {(todosData as ITodosType[]).map((todo) => (
        <ToDo key={todo.id} {...todo}></ToDo>
      ))}
    </WrapperToDo>
  );
};
