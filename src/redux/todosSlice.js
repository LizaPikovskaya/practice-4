import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        console.log(state);
        state.push(action.payload);
      },
      prepare: text => {
        const id = nanoid();
        return { payload: { id, text, likes : 0 } };
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    incrementLike(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, likes: todo.likes + 1 }
        };
        return todo;
      }) 
    },
    decrementLike(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          if (todo.likes - 1 < 0) { return todo };
          return { ...todo, likes: todo.likes - 1 }
        };
        return todo;
      })
    },
    editTextTodo(state, {payload: {id, text}}) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text }
        };
        return todo;
      })
    }
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, deleteTodo, incrementLike, decrementLike, editTextTodo } = todosSlice.actions;
