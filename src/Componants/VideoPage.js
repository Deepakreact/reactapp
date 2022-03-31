import React from 'react'
import Videos from './Videos'
import {products} from '../data/data'
import {Helmet } from 'react-helmet'


function VideoPage() {
    return (
        <div>
        <Helmet>
        <title>Videos</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <meta name="viewport" content="width=device-width initial-scale=1.0"></meta>
        
        
        </Helmet>
        <Videos products={products}/>
            
        </div>
    )
}

export default VideoPage
