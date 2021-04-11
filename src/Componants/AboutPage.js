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
        <h1>This is about page</h1>
        <div className="lottie" ref={container}>
        
        
        </div>
        <div className="about-container">
        <div className="a-content">
        <p>Djash word of entertainment best film production house in meerut produce movies ,also provides dance, acting, modeling and singing traing in the best dance academty in meerut .Our professional dance choreographers provides dance traing for participating in TV reality shows such as DID and Dance +  </p>
        
        </div>
        <div className="a-image">
        <img src='gimages/g8.jpg'></img>
        
        </div>
        
        </div>
            
        </div>
    )
}

export default AboutPage
