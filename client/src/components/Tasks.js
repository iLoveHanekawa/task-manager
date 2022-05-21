import React from 'react'
import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Tasks(props) {

    const navigate = useNavigate()

    return <div>
        <ul style = {
            {
                listStyle: 'none',
                fontFamily: 'inherit',
                height: '40vh',
                overflow: 'scroll',
                margin: '0',
                padding: '0',
                overflowX: 'hidden'
            }
        }>    
            {props.taskList.map((i, index) => {
                return <li style = {
                    {
                        marginBottom: '0.6rem',
                        marginTop: '0.6rem',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        width: '40rem',
                        height: '3.8rem',
                        boxShadow: '2px 5px 10px lightgrey',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '0.5rem'
                    }
                } key = {i._id}>
                    <h4 style = {
                        {
                            marginLeft: '3.5rem'
                        }
                    }>{i.name}</h4>
                    <div>
                        <AiFillEdit onClick = {() => navigate(`/${index}`)} style = {
                            {
                                fontSize: '1.2rem',
                                marginRight: '2rem'
                            }
                        } />
                        <MdDelete style = {
                            {
                                fontSize: '1.2rem',
                                marginRight: '2rem'
                            }
                        } />
                    </div>
                </li>
            })}
        </ul>
    </div>
}