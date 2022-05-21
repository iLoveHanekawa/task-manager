import axios from 'axios'
import React from 'react'

export default function Form(props) {

    const [inputText, setInputText] = React.useState('')

    return <div style = {
        {
            height: '10rem',
            width: '40rem',
            boxShadow: '2px 5px 8px lightgrey',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }
    }>
        <h2>Task Manager</h2>
        <form onSubmit = {async (e) => {
            e.preventDefault()
            await axios.post('api/v1/tasks/', {
                name: e.target[0].value,
                success: false
            })
            props.setRefreshTasks(true)
            setInputText('')
        }}>
            <input onChange={e => {
                setInputText(e.target.value)
            }} value = {inputText} placeholder = 'e.g. Do dishes' style = {
                {
                    fontFamily: 'inherit',
                    border: 'none',
                    backgroundColor: '#e6e6e6',
                    height: '1.5rem',
                    width: '20rem',
                    textIndent: '1rem',
                    borderTopLeftRadius: '0.2rem',
                    borderBottomLeftRadius: '0.2rem',
                    outlineColor: 'grey',
                }
            } type = 'text' id = 'task'/>
            <button style = {
                {
                    height: '1.6rem',
                    border: 'none',
                    backgroundColor: 'cornflowerblue',
                    width: '5rem',
                    fontFamily: 'inherit',
                    color: 'white',
                    borderTopRightRadius: '0.2rem',
                    borderBottomRightRadius: '0.2rem'
                }
            }>Submit</button>
            
        </form>
        
    </div>
}