import React,{useState,useRef,useEffect} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fade from 'react-reveal/Fade'
import './slider.css'

function Slider({slider}) {
    const [current, setCurrent] = useState(0)
    const length=slider.length
    const timeout=useRef(null)

    useEffect(() => {
        const nextSlide=()=>{
            setCurrent(current===length-1 ? 0 :current + 1)
        }

        timeout.current= setTimeout(nextSlide,5000)
        
        return () => {
            //
        }
    }, [current,length])
    
    const preSlide=()=>{
        setCurrent( current===0 ? length-1 : current-1)
    


    }
    const nextSlide=()=>{
        setCurrent( current===length-1 ? 0 : current+1)

    }
    console.log(current)


    return (
        <div>
        <div className="slider">

        {
            slider.map((slide,index)=>
            
            
            <div className="slides" key={index}>
      
        
            {
                index===current &&(
              

            <div className="slide">
            <Fade>
  
      
            <img  src={slide.image} alt={slide._id}></img>
            </Fade>
       
         
            </div>

            
            )
            }
      
     
            </div>
            
            )
        }
    

        
        
        </div>
        <div className="buttons">
        <button onClick={preSlide}> <ArrowBackIosIcon/></button>
        <button onClick={nextSlide}><ArrowForwardIosIcon/></button>
            
        
        
        </div>
    
            
        </div>
    )
}

export default Slider
