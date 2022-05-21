import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Home from './components/Home'
import TaskDescription from './components/TaskDescription';

export default function App() {

  const [taskList, setTaskList] = React.useState([])
  const [ranOnce, setRanOnce] = React.useState(false)
  const [refreshTasks, setRefreshTasks] = React.useState(false)

  React.useEffect(() => {
        const getAllTasks = async () => {
            const { data } = await axios.get('api/v1/tasks/')
            setTaskList(data.tasks)
            setRanOnce(true)
            setRefreshTasks(false)
        }
        getAllTasks()
    }, [ranOnce, refreshTasks])

  return <Routes>
    <Route path = '/' element = {<Home setRefreshTasks = {setRefreshTasks} taskList = {taskList} setTaskList = {setTaskList} />} />
    <Route path = '/:id' element = {ranOnce? <TaskDescription setTaskList = {setTaskList} taskList = {taskList} />: <h1>Loading</h1>} />
  </Routes>
}
