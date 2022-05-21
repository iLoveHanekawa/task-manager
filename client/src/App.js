import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TaskDescription from './components/TaskDescription';

export default function App() {

  const [taskList, setTaskList] = React.useState([])
  console.log(taskList)

  return <Routes>
    <Route path = '/' element = {<Home taskList = {taskList} setTaskList = {setTaskList} />} />
    <Route path = '/:id' element = {<TaskDescription taskList = {taskList} />} />
  </Routes>
}
