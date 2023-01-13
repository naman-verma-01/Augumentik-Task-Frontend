import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_AUTH_STATUS } from '../Reducers/types';
import { useDispatch } from 'react-redux'
import { signup } from "../API/Admin.js"

function Signup() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const nav = useNavigate();
    const dispatch = useDispatch()

    const signupCallback = async (response) => {

        response = await response.json()
        console.log("response", response)
        if (response.msg == "Success") {
            nav("/admin");
            
        }
        else {
            window.alert("User Sign Failed!!")
        }
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("ONHANDLER")
        signup(userInfo.email, userInfo.password, userInfo.name, signupCallback)



    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=3000&q=80)`
       
    

    })
    return (

        <div className='formPage' style={{}}>
            <form className='formBody' onSubmit={submitHandler}>
                <h1 style={{}}>&nbsp;&nbsp; Sign Up </h1> <hr /><br />

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, email: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, name: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, password: event.target.value }) }} />
                </div>

                <button onClick={submitHandler} style={{ width: "100%" }} class="btn btn-dark" >Sign Up</button>
                <hr />
                <h6>Don't have an account? <a href='/signup'>Sign Up</a></h6>

            </form>
        </div>


    )
}

export default Signup