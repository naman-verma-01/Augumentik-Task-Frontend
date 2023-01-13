import React, { useEffect, useState } from 'react'
import HomeNavbar from "./HomeNavbar"
import SlideShow from './Slideshow'
import {getall} from "../API/PageData"
import Pop from './Pop'
function Home() {

    const [loading, setLoading] = useState(1)
    const [data, setData] = useState()
    const [showPopup, setShowPopup] = useState(false)

    const getallCallback = async(response) =>{
        response = await response.json()
        console.log("RESPONSE",response)
        setData(response.data)
        setLoading(0)

    } 
    const togglePopup = () => {
        setShowPopup(!showPopup)
      }
    useEffect(() => {

        if(loading){
            getall(getallCallback)
        }
        //  document.body.style.backgroundColor = "white";
        //  document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=3000&q=80)`

    })

    return (
        <div>
            <section>
                <HomeNavbar />
                <div className='section1'>
                    <div style={{ marginLeft: "40px", width:"50vw" }}>
                        <div className='pageTitle' style={{ textAlign: "left", fontSize: "80px", color: "white", fontWeight: "500", textShadow: "4px 2px 5px black" }}>WELCOME <br /> TO SRI LANKA </div>

                        <span class="nav-link" style={{ color: "#fff", fontSize: "15px", textShadow: "4px 2px 5px black" }} href="#" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                        
                        <br/>
                    <button onClick={togglePopup} style={{ width: "50%", textAlign:"center", alignItems:"center" }} class="btn btn-dark" >Explore</button>
                    <br/><br/>
                    <div class="Social-media">
                        <a href="#"><font color="#007cc4"><i class="fab fa-instagram"></i></font></a>
                        <a href="#"><font color="#007cc4"><i class="fab fa-facebook"></i></font></a>
                    </div>
                    </div>
                    {data != null? <div style={{}}><SlideShow topSlide={data[0].TopSlide}/></div>
                :null}
                    
                </div>

            </section>

            <section>
                <br/><br/><br/><br/><br/><div className='section1'>
                    
                {data != null? <div style={{}}><SlideShow topSlide={data[0].TopSlide}/></div> :null}
                    <div style={{ marginLeft: "40px", width:"50vw" }}>
                        <div className='pageTitle' style={{ textAlign: "left", fontSize: "80px", color: "white", fontWeight: "500", textShadow: "4px 2px 5px black" }}>EXPLORE <br /> THE ISLANDS </div>

                        <span class="nav-link" style={{ color: "#fff", fontSize: "15px", textShadow: "4px 2px 5px black" }} href="#" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                        <br/>
                    <button onClick={{}} style={{ width: "50%", textAlign:"center", alignItems:"center" }} class="btn btn-dark" >Explore More</button>
                    <br/><br/>
                    <div class="Social-media">
                        <a href="#"><font color="#007cc4"><i class="fab fa-instagram"></i></font></a> &nbsp;&nbsp;&nbsp;
                        <a href="#"><font color="#007cc4"><i class="fab fa-facebook"></i></font></a>
                    </div>
                    
                    </div>
               
                </div>
                
            </section>
            {showPopup ? 
            <Pop style={{zIndex:"1"}}
              text='Subscribe'
              closePopup={togglePopup}
            />
            : null
          }
        </div>
    )
}

export default Home