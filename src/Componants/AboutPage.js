import React,{useEffect,useRef} from 'react'
import {Helmet } from 'react-helmet'
import './apage.css'
import lottie from 'lottie-web'

function AboutPage() {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container:container.current,
            loop:true,
            autoplay:true,
            renderer:"svg",
            animationData:require('../ball.json')
        })
        return () => {
            //
        }
    }, [])

    return (
        <div className="about">
        <Helmet>
        <title>About</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="viewport" content="width=device-width initial-scale=1.0"/>
        
        
        </Helmet>
        <h1>About us</h1>
        <div className="lottie" ref={container}>
        
        
        </div>
        <div className="about-container">
        <div className="a-content">
        <p>Djash word of Entertainment best film production house in Meerut established in 2010, founder <span>Mr. Jash Tisavard</span>, produce movies ,
         dance tv reality shows(Passion of Dance), short movies, video albums, music album,
         work as a casting agency place new actors in bollywood movies,
         also provides dance, acting, 
         modeling and singing training. We are the best dance academy in meerut,
         our professional dance choreographers provides 
         dance training of all dance forms
          bollywood dance,hip hop,crump,kathak, classical, contemporary,jazz,theme dance . </p>
        
        </div>
        <div className="a-image">
        <img src='gimages/g8.jpg' alt="not available"></img>
        
        </div>
        
        </div>
            
        </div>
    )
}

export default AboutPage
