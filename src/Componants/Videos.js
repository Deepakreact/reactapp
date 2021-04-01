import React from 'react'
import ReactPlayer from 'react-player'
import Fade from 'react-reveal/Fade'
import './video.css'

function Videos({products}) {
    return (
        <div className="video-container">
        
        <div>
        <h1>Videos</h1>
        
        </div>
   
        <ul className="video">
        <Fade top>
        {
            products.map((product)=>
            <li className="video-card">
            <ReactPlayer url={product.url} controls className="player"  width='400px' height='200px'></ReactPlayer>
            
            
            </li>)
        

        }

        </Fade>
        </ul>
        
        
        
            
        </div>
    )
}

export default Videos
