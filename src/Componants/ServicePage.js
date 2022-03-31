import React,{useEffect,useRef} from 'react'
import {Helmet} from 'react-helmet'
import { services } from '../data/sdata'
import './spage.css'
import lottie from 'lottie-web'



function ServicePage() {
    const container = useRef(null)


    useEffect(() => {
        lottie.loadAnimation({
            container:container.current,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData:require("../dance.json")


        })
        
        return () => {
            //
        }
    }, [])

    return (
        <div className="service">
        <Helmet>
        <title>Services</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <meta name="viewport" content=" width=device-width initial-scale=1.0"></meta>
        
        
        </Helmet>

        <h1>Services</h1>
        <div className="s-container">
      
        
    

        { 
            
           
            services.map((product)=>
            <div className="s-content">
            <div className="left">
            <div className="slottie">
            <img src={product.timage} alt=""></img>
            
            
            </div>
            <h1>{product.title}</h1>
            <p>{product.content}</p>
            <div className="right">
            <img src={product.image} alt=""></img>
            
            </div>
            
            </div>
          
            



            </div>
            
            
            )
         
        }
        </div>
    
    

        
    
            
        </div>
    )
}

export default ServicePage
