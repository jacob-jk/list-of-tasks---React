export const getExampleTasks = async () => {
  const response = await fetch("/list-of-tasks---React/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
