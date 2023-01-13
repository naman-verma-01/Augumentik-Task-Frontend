import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_AUTH_STATUS } from '../Reducers/types';
import { useDispatch } from 'react-redux'
import { updateDetail } from "../API/PageData.js"


function FormSocial() {

    const navigate = useNavigate()

    const [socialInfo, setSocialInfo] = useState({ facebook: "", instagram: "" })

    const dispatch = useDispatch()

    const postCallback = async (response) => {

        response = await response.json()
        console.log("response", response)


    }
    const submitHandler = (event) => {
        event.preventDefault()

        updateDetail(socialInfo, postCallback)

        navigate("/admin")

    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(https://wallpaperaccess.com/full/1431622.jpg)`



    })
    return (

        <div className='formPage' style={{}}>
            <form className='formBody' onSubmit={submitHandler}>
                <h1 style={{}}>Update Social Info</h1> <hr /><br />



                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Facebook</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(event) => { event.preventDefault(); setSocialInfo({ ...socialInfo, facebook: event.target.value }) }} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Instagram</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(event) => { event.preventDefault(); setSocialInfo({ ...socialInfo, instagram: event.target.value }) }} />
                </div>


                <button onClick={submitHandler} style={{ width: "100%" }} class="btn btn-dark" >Post</button>
                <button onClick={()=>{navigate(-1)}} style={{ width: "100%", marginTop:"10px" }} class="btn btn-danger" >Cancel</button>

                <hr />

            </form>
        </div>


    )
}

export default FormSocial