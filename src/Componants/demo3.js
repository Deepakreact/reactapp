import React, {useState,useRef,useEffect} from 'react'
import './hero.css'


function Hero({slides}) {
    const [current, setCurrent] = useState(0)
    const length= slides.length
    const timeout=useRef(null)
    useEffect(() => {
        const nextSlide=()=>{
            setCurrent(current===length-1 ? 0 :current + 1)
        }

        timeout.current= setTimeout(nextSlide,3000)
        
        return () => {
            //
        }
    }, [current,length])
    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0 :current + 1)
    }
    const preSlide=()=>{
        setCurrent(current===0 ? length-1  :current - 1)
    }
    return (
        <div>
        <div className="section">
        
        <div className="wrapper">
        {slides.map( (slide,index)=> 
        
            <div className="slider" key={index}>
                {
               index=== current &&(  <div className="slide">
               <img src={slide.image}></img>
               <div className="content">
               <h1> {slide.title}</h1>
               
               </div> 
               
               
               </div>)  }
            
          

            
            
            </div>


        


        )}
        <div className="arrow">
        <button onClick={preSlide}>left</button>
        <button onClick={nextSlide}>right</button>

        
         </div>
            
            
            
        

        
        </div>
        </div>
            
        </div>
    )
}

export default Hero
