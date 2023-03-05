import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/todoSlice';
import { ToDoButton } from './ToDoButton';
import { StyledInput } from './ToDoInput.styles';

export const ToDoInput = () => {
  const [input, setInput] = useState<string>('');

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem({ title: input }));

    setInput('');
  };

  return (
    <>
      <StyledInput
        id="input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Create a new task"
      />
      <ToDoButton onClick={handleClick}>Add item</ToDoButton>
    </>
  );
};
