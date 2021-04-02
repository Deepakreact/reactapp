import React from 'react'
import {products} from '../data/data'
import About from './About'
import Gallery from './Gallery'
import Slider from './Slider'
import Videos from './Videos'

function HomePage() {
    return (
        <div>
        <Slider slider={products}/>
        <About />
        <Gallery products={products}/>
        <Videos products={products}/>
      
    
            
        </div>
    )
}

export default HomePage
