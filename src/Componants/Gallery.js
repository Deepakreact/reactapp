import {useState} from 'react'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import './gallery.css'

function Gallery({products}) {
    const [product, setProduct] = useState(null)
    const openModal=(product)=>{
        setProduct({...product,product})
    

    }



    return (
        <div className="gallery">
        <div className="gallery-headline">
        <h1>Galllery</h1>
        </div>
        <ul className="gallery-list">
        <Fade top>
        {
            products.map((product)=>
            <li className="gallery-card">
        

            
            <img src={product.image} alt={product._id} onClick={()=>openModal(product)}>
            </img>
            
    
            
            
            
           
            
            
            </li>
            
            
            )

        }
        
        </Fade>
        </ul>
        {
            product &&(
                <Modal isOpen={true}  style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'black'
                    },
                    content: {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '2px',
                      border: '1px solid #ccc',
                      background: 'black',
                      overflow: 'hidden',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }}>




                <Zoom>

            
                <div className="product-details">

                
                     <img src={product.image} alt={product._id}></img> 
                    
                   
                
                </div>
                <button onClick={()=>setProduct(!product)} className="modal-close">x</button>
                </Zoom>
                
                </Modal>
            )
        }
            
        </div>
    )
}

export default Gallery
