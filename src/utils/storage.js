export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
export const getTaskById = (id) => {
  const tasks = getTasks();
  return tasks.find((task) => task.id === id);
}