import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_AUTH_STATUS } from '../Reducers/types';
import { useDispatch } from 'react-redux'
import { login } from "../API/Admin.js"

function Login() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const nav = useNavigate();
    const dispatch = useDispatch()

    const loginCallback = async (response) => {

        response = await response.json()
        console.log("response", response)
        if (response.msg == "Success") {
            dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: true } });
            document.body.style.backgroundImage = 'none'
            nav("/admin");
            
        }
        else {
            window.alert("User unidentified!!")
        }
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("ONHANDLER")
        login(userInfo.email, userInfo.password, loginCallback)



    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=3000&q=80)`
       
    

    })
    return (

        <div className='formPage' style={{}}>
            <form className='formBody' onSubmit={submitHandler}>
                <h1 style={{}}>&nbsp;&nbsp; Login </h1> <hr /><br />

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, email: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, password: event.target.value }) }} />
                </div>

                <button onClick={submitHandler} style={{ width: "100%" }} class="btn btn-dark" >Login</button>
                <hr />

            </form>
        </div>


    )
}

export default Login