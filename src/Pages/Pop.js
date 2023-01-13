import React, { useState } from 'react'
import { leadUpdate } from '../API/Lead'
function Pop(props) {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })


    const leadUpdateCallback = async (response) => {

        response = await response.json()
        console.log("response", response)
        props.closePopup()
        
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("ONHANDLER")
        leadUpdate(userInfo.name, userInfo.contact_number, userInfo.email, userInfo.interest, leadUpdateCallback)



    }
  return (
    

          <div className='formPage' style={{}}>

            <form className='formBody' onSubmit={submitHandler}>
            <button onClick={props.closePopup}>X</button>

                <h1 style={{}}>&nbsp;&nbsp; {props.text} </h1> <hr /><br />


                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, name: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, email: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Number..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, contact_number: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Interest</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Interest..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, interest: event.target.value }) }} />
                </div>
                <button onClick={submitHandler} style={{ width: "100%" }} class="btn btn-dark" >Subscribe</button>
                <hr />

            </form>
        </div>
        
  )
}

export default Pop
  
  
  
  