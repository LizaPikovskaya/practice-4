import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        console.log(action);
        state.todos.push(action.payload);
      },
      prepare: text => {
        const id = nanoid();
        return { payload: { id, text } };
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;
