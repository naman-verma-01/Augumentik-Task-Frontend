import React, { useEffect } from 'react'
import Navbar from './Navbar'
function HomeNavbar() {
    useEffect(() => {
        // document.body.style.backgroundImage= 'url(https://letithappen.pl/wp-content/uploads/2019/01/IMG_9409.jpg)'
    })
    return (
        <div>

            <div >
                <nav style={{ background: "transparent" }} class="navbar navbar-expand-lg navbar-light ">
                    <a class="navbar-brand" style={{fontSize:"35px", color: "white", textShadow: "0 0 1px black, 0 0 2px black, 0 0 3px black, 0 0 5px black" }} href="#">&nbsp; <b>Zoinged</b> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav active">

                            <li class="nav-item active">
                                <a style={{ color: "white", fontSize:"25px", marginLeft:"20px" }} href='#'> Home &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                <a style={{ color: "white",fontSize:"25px" , marginLeft:"20px"}} href='#'> Discover &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                <a style={{ color: "white",fontSize:"25px" , marginLeft:"20px"}} href='#'> History &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                <a style={{ color: "white",fontSize:"25px" , marginLeft:"20px"}} href='#'> Events &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                <a style={{ color: "white",fontSize:"25px" , marginLeft:"20px"}} href='#'> Blogs &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                <a style={{ color: "white",fontSize:"25px" , marginLeft:"20px"}} href="/login">Admin &nbsp;</a>

                            </li>

                        </ul>
                    </div>

                    
                </nav>
            </div>



        </div>
    )
}

export default HomeNavbar