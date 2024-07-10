import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: () => {},
    setExampleTasks: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTask,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setExampleTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectNonEmptyTasks = (state) => selectTasks(state).length > 0;
export const selectEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export default tasksSlice.reducer;
