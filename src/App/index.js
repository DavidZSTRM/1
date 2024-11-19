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
/*Cambio desde github*/
export default App;
