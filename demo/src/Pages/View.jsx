import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { DELETE_USER, EDIT_USER, VIEW_USER } from '../Action/action';

function View() {

    const {id} = useParams()
    const dispatch = useDispatch();
    const [data , setData] = useState('')
    const Record = useSelector(state => state.crud.users)

    const deleteRecord = (id) => {
        dispatch(DELETE_USER(id))
    }

    const editRecord = (id) => {
        dispatch(EDIT_USER(id))
    }

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
        setData(all)
         
    },[])
 
    useEffect(() => {
        dispatch(VIEW_USER());
    }, [])

    return (
        <center>
            <h1>View Page</h1>

            <div className="container">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th> 
                                <th scope="col">Password</th>
                                <th scope="col">City</th>
                                <th scope="col">Degination</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Record.map((val , i) => { i++
                                    return (
                                        <tr>
                                            <th scope="row">{i}</th>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.password}</td>
                                            <td>{val.city}</td>
                                            <td>{val.degignation}</td>
                                            <td>{val.salary}</td>
                                            <td>{val.contanct}</td>
                                            <td>
                                                <Link>
                                                    <button onClick={ () => deleteRecord(val.id)} className='btn btn-danger mx-3'>Delete</button>
                                                </Link>
                                                <Link to={`/Edit/id${val.id}`}>
                                                    <button className='btn btn-primary ' onClick={ () => editRecord(val.id)}>Edit</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <Link to={'/Add'}>Add</Link>
        </center>
    )
}

export default View