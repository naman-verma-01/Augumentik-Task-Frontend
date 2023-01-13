import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_AUTH_STATUS } from '../Reducers/types';
import { useDispatch } from 'react-redux'
import { addBottomSlide, addTopSlide, updateDetail } from "../API/PageData.js"


function Login() {
    
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [file, setFile] = useState()
    const [gallery, setGallery] = useState()
    const dispatch = useDispatch()

    const postCallback = async (response) => {

        response = await response.json()
        console.log("response", response)
        

    }
    const submitHandler = (event) => {
        event.preventDefault()

        if (gallery == "top") {
            addTopSlide(name, file, postCallback)
        }
        else {
            addBottomSlide(name, file, postCallback)
        }

        navigate("/admin")

    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(https://wallpaperaccess.com/full/1431622.jpg)`



    })
    return (

        <div className='formPage' style={{}}>
            <form className='formBody' onSubmit={submitHandler}>
                <h1 style={{}}>Upload Image</h1> <hr /><br />

                <div class="mb-3">
                    <label for="exampleFormControlInput1" style={{ color: "black" }} class="form-label">Choose Image Area</label>
                    <select class="form-control" id="exampleFormControlInput1" onChange={(event) => { event.preventDefault(); setGallery(  event.target.value ) }} >
                        <option class="form-control" id="exampleFormControlInput1" value="Blank">Option</option>
                        <option class="form-control" id="exampleFormControlInput1" value="top">Top Gallery</option>
                        <option class="form-control" id="exampleFormControlInput1" value="bottom">Bottom Gallery</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(event) => { event.preventDefault(); setName(event.target.value) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Image</label>
                    <input type="file" class="form-control" enctype="multipart/form-data" id="exampleFormControlInput1" onChange={(event) => { event.preventDefault(); setFile(event.target.files[0]) }} />
                </div>

                <button onClick={submitHandler} style={{ width: "100%" }} class="btn btn-dark" >Post</button> 
                <button onClick={()=>{navigate(-1)}} style={{ width: "100%", marginTop:"10px" }} class="btn btn-danger" >Cancel</button>
                <hr />

            </form>
        </div>


    )
}

export default Login