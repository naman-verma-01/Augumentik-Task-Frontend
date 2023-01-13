import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { leadPdf,leadPdfDownload } from '../API/Lead'


function download(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  function Admin() {

    const [switchButton, setSwitchButton] = useState(false)

    const handleGenerate = () =>{
        setSwitchButton(true)
    }
    useEffect(() => {

        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=90 )"

    })

    const leadPdfDownloadCallback = (response) =>{
        console.log(response)
        console.log(response)

        response.blob().then(blob => download(blob,"leadPDF.pdf"))

    }

    

    return (
        <div >

            <Navbar options={[{ name: "Upload Image", endpoint: "/form/imageUpload" },
            { name: "Update Social Data", endpoint: "/form/changeSocial" },
            { name: "Sign Up Admin", endpoint: "/signup" }
            ]} />

            

<>
                    <div className='pageTitle' style={{ fontSize: "clamp(1rem, 10vw, 10rem)", color: "white", fontWeight: "1000", textShadow: "4px 2px 5px black" }}>Admin Panel </div>
                    <hr style={{ borderColor: "white", borderBlockWidth: "8px", opacity: 1 }} />

                </>
            <ul class="nav justify-content-center">

                <li class="nav-item">
                    
                    <span class="nav-link" style={{ color: "#fff", fontSize: "30px", fontWeight: "1000", textShadow: "4px 2px 5px black" }} href="#" >
                        Hey there... <br /> Welcome to the Admin Panel
                    </span>

                    {switchButton == false ? 
                        < button style={{textAlign:"center"}} className='btn btn-dark' onClick={()=>leadPdf(handleGenerate)}>
                            Generate User Pdf
                        </button> :  
                        
                        <button style={{textAlign:"center"}} className='btn btn-danger' onClick={()=>leadPdfDownload(leadPdfDownloadCallback)}>
                            Download User Pdf
                        </button>
                    }
                </li>
          
                         
            </ul>


            





           
        </div>
    )
}

export default Admin