import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function TaskDescription(props) {

    const { id } = useParams()
    const navigate = useNavigate()
    const start = false

    const someStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8rem',
        padding: '0',
        margin: '0',
        width: '30rem',
    }

    return <div>
        {props.taskList.length === 0? <h1>No Items</h1>: <div style = {
            {
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }
        }>
            <div style = {
                {
                    height: '25rem',
                    width: '40rem',
                    boxShadow: '2px 5px 8px lightgrey',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }>
                <h1>Edit Task</h1>
                <br></br>
                <br></br>
                <div style = {someStyle}>
                    <h4 style = {{width: '5rem'}}>Task ID:</h4>
                    <h4>{props.taskList[id]._id}</h4>
                </div>
                <div style = {someStyle}>
                    <h4 style = {{width: '5rem'}}>Name:</h4>
                    <h4 style = {{
                        backgroundColor: 'lightgrey', 
                        borderRadius: '0.2rem',
                        padding: '0 1rem',
                        width: '15rem'
                    }}>{props.taskList[id].name}</h4>
                </div>
                <form onSubmit = {async (e) => {
                    e.preventDefault()
                    // can't figure a use for this without making everything more complicated
                }}>    
                    <label htmlFor = 'check'><h4 style = {{display: 'inline'}}>Completed</h4></label>
                    <input onChange = {async (e) => {
                        await axios.patch(`api/v1/tasks/${props.taskList[id]._id}`, {success: e.target.checked})
                        props.setRefreshTasks(true)
                    }} style = {{marginLeft: '7.9rem'}} type = 'checkbox' checked = {props.taskList[id].success} id = 'check' />
                    <br/>
                    <br/>
                    <button style = {{
                        color: 'white',
                        backgroundColor: 'cornflowerblue',
                        border: 'none',
                        height: '2.2rem',
                        width: '30rem',
                        borderRadius: '0.2rem',
                        padding: '0.4rem, 0.8rem'
                    }}><h4>Edit Task</h4></button>
                </form>
            </div>
            <br/><br/><br/>
            <button onClick = {() => navigate('/')} style = {{
                height: '3rem',
                width: '19rem',
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '0.4rem'
            }}><h4>Back To Tasks</h4></button>
        </div>}
    </div>
}