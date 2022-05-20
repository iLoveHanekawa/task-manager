import React from 'react'
import Tasks from './Tasks'
import Form from './Form'

export default function Home() {
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
        <Form />
        <Tasks />
    </div>
}