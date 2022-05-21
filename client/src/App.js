import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TaskDescription from './components/TaskDescription';

export default function App() {

  const [taskList, setTaskList] = React.useState([])
  const [ranOnce, setRanOnce] = React.useState(false)

  return <Routes>
    <Route path = '/' element = {<Home setRanOnce = {setRanOnce} taskList = {taskList} setTaskList = {setTaskList} />} />
    <Route path = '/:id' element = {<TaskDescription setTaskList = {setTaskList} taskList = {taskList} setRanOnce = {setRanOnce} ranOnce = {ranOnce} />} />
  </Routes>
}
