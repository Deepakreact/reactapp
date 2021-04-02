import React from 'react'
import Gallery from './Gallery'
import {products} from '../data/data'

function GalleryPage() {
    return (
        <div>
        <Gallery products={products}/>
            
        </div>
    )
}

export default GalleryPage
