import React from 'react';
import {AppUI} from './AppUI';
import { TaskProvider } from '../TaskContext';
//import './App.css';

function App() {

  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
