import React, { useEffect, useState } from 'react'
import { serverApiUrl } from "../index"

const imgs = [
    'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg',
    'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg',
    'https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg',
    'https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg',
    'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg'
];



const imageLink = "http://localhost:1800/pageData/getImage?image="


function Slideshow(props) {

    const [primaryIndex, setPrimaryIndex] = useState(0)
    const [secondaryIndex, setSecondaryIndex] = useState(0)
    const [primaryStyle, setPrimaryStyle] = useState({
        opacity: 1
    })

    const [secondaryStyle, setSecondaryStyle] = useState({
        opacity: 0
    })
    const [transit, setTransit] = useState(false)
    console.log("PROPS", props)
    useEffect(() => {
    })


    const slidePrevious = () => {
        if (!transit) {
            const nextIndex = primaryIndex - 1 < 0 ? props.topSlide.length - 1 : primaryIndex - 1;
            transitSlides(nextIndex, false);
        }
    }
    const slideNext = () => {
        if (!transit) {
            const nextIndex = primaryIndex + 1 === props.topSlide.length ? 0 : primaryIndex + 1;
            transitSlides(nextIndex, true);
        }
    }
   
    const transitSlides = (nextIndex, left) => {
        setPrimaryStyle({
            animation: left ? 'slideOutLeft 1s ease-in-out' : 'slideOutRight 1s ease-in-out',
            transition: 'all 1s',
            opacity: 0
        })

        setSecondaryStyle({
            animation: left ? 'slideInLeft 1s ease-in-out' : 'slideInRight 1s ease-in-out',
            transition: 'all 1s',
            opacity: 1
        })
        //setTransit(true)
        setPrimaryIndex(nextIndex)
        
        //setTimeout(() => updatePrimary(), 1000);

        
    }
    const updatePrimary = () => {
        setTransit(true)
        setPrimaryIndex(secondaryIndex)
        setPrimaryStyle({
            opacity: 1
        })
        setSecondaryStyle({
            opacity: 0
        })

    }
    


    return (
        <div className="slideShow">
            <div
                className="slideArrow arrowLeft"
                onClick={() => slidePrevious()}>&lt;</div>
            <div
                className="slideArrow arrowRight"
                onClick={() => slideNext()}>&gt;</div>
            {
                //console.log("CHECK", imageLink + props.topSlide[primaryIndex]?.image)

            }
            <div className="slide" style={{ ...primaryStyle, backgroundImage: `url(${imageLink + props.topSlide[primaryIndex].image})` }}  >
                <p style={{ zIndex: 30, color: "white", position: "absolute", bottom: "50px", marginLeft: "40px", fontSize: "25px", fontWeight: "20000" }}>{props.topSlide[primaryIndex].name}</p>
                <p style={{ zIndex: 30, color: "white", position: "absolute", bottom: "0", marginLeft: "40px", fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            </div>
            <div className="slide" style={{ ...secondaryStyle, backgroundImage: `url(${imageLink + props.topSlide[primaryIndex].image})` }}>
                <p style={{ zIndex: 30, color: "white", position: "absolute", bottom: "50px", marginLeft: "40px", fontSize: "25px", fontWeight: "20000" }}>{props.topSlide[primaryIndex].name}</p>
                <p style={{ zIndex: 30, color: "white", position: "absolute", bottom: "0", marginLeft: "40px", fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            </div>
        </div>
    )
}



export default Slideshow

//${imageLink + this.props.topSlide[this.state.primaryIndex].image}