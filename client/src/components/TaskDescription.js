import React from 'react'
import { useParams } from 'react-router-dom'

export default function TaskDescription(props) {

    const { id } = useParams()

    return <div>
        {props.taskList.length === 0? <h1>No Items</h1>: <h1>{props.taskList[id].name}</h1>}
    </div>
}