import React from 'react'

export default function Form() {
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
        <form onSubmit = {(e) => {
            e.preventDefault()
        }}>
            <input placeholder = 'e.g. Do dishes' style = {
                {
                    fontFamily: 'inherit',
                    border: 'none',
                    backgroundColor: '#e6e6e6',
                    height: '1.5rem',
                    width: '20rem',
                    textIndent: '1rem',
                    borderRadius: '0.2rem',
                    outlineColor: 'grey'
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
                    borderRadius: '0.2rem'
                }
            }>Submit</button>
            
        </form>
        
    </div>
}