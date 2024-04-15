import { useEffect, useState } from "react";

export const useTasks = (keyName) => {
  const getInitialState = () => {
    const localStorageState = localStorage.getItem(keyName);
    if (localStorageState === null) {
      return [
        { id: 1, content: "przejść na Reacta", done: false },
        { id: 2, content: "zjeść kolację", done: true },
      ];
    }

    return JSON.parse(localStorage.getItem(keyName));
  };

  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(tasks));
    // eslint-disable-next-line
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return { tasks, removeTask, toggleTask, setAllDone, addNewTask };
};
