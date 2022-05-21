import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function TaskDescription(props) {

    const { id } = useParams()
    
    React.useState(() => {
        const getAllTasks = async () => {
            const { data } = await axios.get('api/v1/tasks/')
            props.setTaskList(data.tasks)
            props.setRanOnce(true)
        }
        getAllTasks()
    }, [props.ranOnce === true])

    return <div>
        {!props.ranOnce? <h1>Loading</h1>: props.taskList.length === 0? <h1>No Items</h1>: <h1>{props.taskList[id].name}</h1>}
    </div>
}