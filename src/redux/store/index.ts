import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducer/todoSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({ reducer: { todos: todoReducer } });

export default store;
