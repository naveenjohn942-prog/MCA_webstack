// App.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (taskName, id = null) => {
    if (id !== null) {
      // Edit an existing task
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, name: taskName } : task
      );
      setTasks(updatedTasks);
      setSelectedTask(null);
    } else {
      // Add a new task
      const newTask = {
        id: Date.now(),
        name: taskName,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setSelectedTask(taskToEdit);
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null); // Clear the selected task if deleted
  };

  const clearSelectedTask = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm
        addTask={addTask}
        selectedTask={selectedTask}
        clearSelectedTask={clearSelectedTask} // Pass the clearSelectedTask function
      />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
