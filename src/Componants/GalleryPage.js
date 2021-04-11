import React from 'react'

import {gproducts} from '../data/gdata'
import './gpage.css'
import Rotate from 'react-reveal/Rotate'
import {Helmet} from 'react-helmet'

function GalleryPage() {
    return (
        <div className="gallery">
        <Helmet>
        <title>Gallery</title>
        <meta name=" description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <meta name="viewport" content="width=device-width initial-scale=1.0"></meta>
        
        
        </Helmet>
        <h1>Gallery</h1>
        <div className="g-container">
        {
            gproducts.map((product)=>
            <Rotate top left>
            
            <div className="g-image-div">
            <img src={product.image} alt=""></img>
            <p>{product.title}</p>
            
            
            </div>
          
            
            
            
            </Rotate>
            
            )
            
            
        }
        </div>

        
            
        </div>
    )
}

export default GalleryPage
