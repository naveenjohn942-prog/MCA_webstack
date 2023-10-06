// TaskForm.js
import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, selectedTask, clearSelectedTask }) {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.name);
    } else {
      setTaskName('');
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      setError('Task name cannot be empty');
      return;
    }

    setError('');

    if (selectedTask) {
      // Edit an existing task
      addTask(taskName, selectedTask.id);
      clearSelectedTask(); // Clear the selected task after editing
    } else {
      // Add a new task
      addTask(taskName);
    }

    setTaskName('');
  };

  return (
    <div className="task-form">
      <h2>{selectedTask ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">{selectedTask ? 'Save' : 'Add'}</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default TaskForm;
