import { createSlice } from '@reduxjs/toolkit';
import { todosData } from '../../utils/todos';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: todosData,
  },
  reducers: {
    addItem: (state, action) => {
      state.todos.unshift({
        completed: false,
        id: Math.random() * 143,
        title: action.payload.title,
      });
    },
    changeItemStatus: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id !== action.payload.id) return item;

        return { ...item, completed: !item.completed };
      });
    },
    removeItem: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, changeItemStatus, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
