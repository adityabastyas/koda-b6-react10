import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      state.data.push(actions.payload);
    },

    editTask: (state, actions) => {
      const { index, value } = actions.payload;
      state.data[index] = value;
    },

    removeTask: (state, actions) => {
      state.data.splice(actions.payload, 1);
    },
  },
});

export const { addTask, editTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
