import React from 'react'
import { SliderData } from './SliderData'
import {useState} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function ImageSlider({slides}) {

    const [current, setCurrent] = useState(0);
    const length=slides.length
    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0 : current+1)
    }
    const preSlide=()=>{
        setCurrent(current===0 ? length-1 : current-1)
    }
    console.log(current)
    return (
        <div>
        <section className="slider">
        <ArrowBackIosIcon className="left-arrow" onClick={preSlide}/>
        <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide}/>
          
        {
            SliderData.map((slide,index)=> 
        
           
             
            <div className={index===current ? 'slide active' : 'slide'} key={index} >
            { index ===current &&
                
                (<img src={slide.image} alt="" className="image"></img>)
            
            }
            
         
            </div>
             
            
            
            )
        
       
      
  } 
        </section>  
        </div>
        )
}

export default ImageSlider
