import React from 'react'
import {products} from '../data/data'
import About from './About'
import Gallery from './Gallery'
import Slider from './Slider'
import Videos from './Videos'
import {Helmet} from 'react-helmet'

function HomePage() {
    return (
        <div>
        <Helmet>
        <title>Home</title>
        <meta name="description" content="djash world of entertainment a film production house. we are the best film production house in meerut produce short movies,casting agency,music album,
        .We also give best dance training in our dance academy,help student to participate in TV reality shows such as DID,Dance+,Super Dancers.Djash worl of Entertainment also produce their own tv reality shows for Channel so that contest can  get a opportunity to show their talent on TV>"></meta>
        <meta name="keywords" content="Film production ,Dance Tv reality show,Dance Academy,Casting agency, Acting,DID"></meta>
        <meta name="viewport" content="width=device-width initial-scale=1.0"></meta>
        
        
        </Helmet>
        <Slider slider={products}/>
        <About />
        <Gallery products={products}/>
        <Videos products={products}/>
      
    
            
        </div>
    )
}

export default HomePage
