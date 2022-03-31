import React,{useRef,useEffect} from 'react'
import lottie from 'lottie-web'
import './cpage.css'
import {Helmet} from 'react-helmet'
import Fade from 'react-reveal/Fade'


function ContactPage() {
const container = useRef(null)
const container2 = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container:container.current,
            loop:true,
            autoplay:true,
            renderer:"svg",
            animationData:require('../work.json')

        })
        lottie.loadAnimation({
            container:container2.current,
            loop:true,
            autoplay:true,
            renderer:"svg",
            animationData:require('../mail.json')

        })



        
        return () => {
            //
        }
    }, [])
    return (
        <div className="cpage">
        <Helmet>
        <title>contact</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <meta name="viewport" content="width=device-width initial-scale=1.0"></meta>
        
        
        </Helmet>


        <h1>contact us</h1>
        <div className="main-div">
        
        <div className="container"  ref={container}>
        
        </div>
        
        
        
        
    
     
        
        <Fade right>

        <div className="form-div">
        
        <div className="lottie" ref={container2}>
        
        </div>
        <form className="form">
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="phone"></input>
        <input type="text" placeholder="message" className="message"  maxlength="80"></input>
        <input type="submit" placeholder="send"></input>
        
        
        </form>
        
        
        </div>
        </Fade>
        
        
        </div>
        
           
        </div>
    )
}

export default ContactPage
