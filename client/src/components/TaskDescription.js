import React from 'react'
import { useParams } from 'react-router-dom'

export default function TaskDescription(props) {

    const { id } = useParams()
    console.log(props.taskList)

    return <div>
        {props.taskList[id].name}
    </div>
}