import React from 'react';
import './App.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import TaskNotesSection from './TaskNotesSection';

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskInputForm />
      <TaskList />
      <TaskNotesSection />
    </div>
  );
}
export default App;
