import React, { useState, useEffect } from 'react';
import { taskList } from './Constants';
import './todoList.css';

const tasks =taskList;

function App() {
  const [completedDays, setCompletedDays] = useState(0);
  const [todayTasks, setTodayTasks] = useState(tasks);
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    const savedDays = localStorage.getItem('completedDays');
    if (savedDays) setCompletedDays(Number(savedDays));
  }, []);

  const handleCompleteTask = (task) => {
    const updatedTasks = todayTasks.filter(t => t !== task);
    setTodayTasks(updatedTasks);
    if (updatedTasks.length === 0 && !allCompleted) {
      setCompletedDays(completedDays + 1);
      setAllCompleted(true);
      localStorage.setItem('completedDays', completedDays + 1);
    }
  };

  const resetTasksForTomorrow = () => {
    setTodayTasks(tasks);
    setAllCompleted(false);
  };

  return (
    <div className="app-container">
      <h1>Daily To-Do List</h1>
      <ul>
        {todayTasks.map(task => (
          <li key={task}>
            {task} 
            <button onClick={() => handleCompleteTask(task)}>Done</button>
          </li>
        ))}
      </ul>
      <h2>Days Completed: {completedDays} / 30</h2>
      <button className="reset-button" onClick={resetTasksForTomorrow}>Reset for Tomorrow</button>
    </div>
  );
}

export default App;
