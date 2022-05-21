import React from 'react'
import Tasks from './Tasks'
import Form from './Form'

export default function Home(props) {
    const [refreshTasks, setRefreshTasks] = React.useState(false)
    return <div style = {
        {
            display: 'flex',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5rem'
        }
    }>
        <Form setRefreshTasks = {setRefreshTasks} />
        <Tasks setRanOnce = {props.setRanOnce} setTaskList = {props.setTaskList} taskList = {props.taskList} refreshTasks = {refreshTasks} setRefreshTasks = {setRefreshTasks} />
    </div>
}