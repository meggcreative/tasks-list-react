import { useState, useEffect } from "react";

export const useTasks = () => {
  const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(
    localStorageTasks ? localStorageTasks : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };
  const addNewTask = (newTaskContent) => {
    if (newTaskContent.trim() === "") {
      return;
    }
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        content: newTaskContent,
        done: false,
      },
    ]);
  };
  const setAllTasksDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    addNewTask,
    setAllTasksDone,
  };
};
