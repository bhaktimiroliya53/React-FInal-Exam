import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { ADD_USER } from '../Action/action';

function Add() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [city , setCity] = useState('')
    const [degignation , setDegination] = useState('')
    const [salary , setSalary] = useState('')
    const [contanct , setContact] = useState('')
    const id = Math.floor(Math.random()*1000);
    const record = useSelector(state => state.crud.users)


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {id,name,email,password,city,degignation,salary,contanct};
        dispatch(ADD_USER(obj));
        setName("")
        setEmail("");
        setPassword("") 
        setCity("") 
        setDegination("") 
        setSalary("") 
        setContact("")
        navigate('/')
    }


    return (
        <center>
            <h1 className='my-5'>Add Page</h1>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="my-2 w-50">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"  onChange={ (e) => setName(e.target.value)} value={name}/>
                        </div>
                        <div className="my-2 w-50">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"  onChange={ (e) => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="my-2 w-50">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={ (e) => setPassword(e.target.value)} value={password}/>
                        </div>
                         <div className="my-2 w-50">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => setCity(e.target.value)} value={city}/>
                        </div>
                        <div className="my-2 w-50">
                            <label className="form-label">Degignation</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => setDegination(e.target.value)} value={degignation}/>
                        </div>
                        <div className="my-2 w-50">
                            <label className="form-label">Salary</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => setSalary(e.target.value)} value={salary}/>
                        </div>
                        <div className="my-2 mb-4 w-50">
                            <label className="form-label">Contact</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => setContact(e.target.value)} value={contanct}/>
                        </div> 
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </form>

                </div>
            </div>

            <Link to={'/'}>View</Link>
        </center>
    )
}

export default Add