import React from 'react'
import Videos from './Videos'
import {products} from '../data/data'

function VideoPage() {
    return (
        <div>
        <Videos products={products}/>
            
        </div>
    )
}

export default VideoPage
