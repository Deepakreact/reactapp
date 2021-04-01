
import './App.css';
import React,{useState} from 'react'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import Slider from './Componants/Slider';
import {products} from './data/data'
import About from './Componants/About';
import Gallery from './Componants/Gallery';
import Videos from './Componants/Videos';
import MenuIcon from '@material-ui/icons/Menu';


function App() {
  const [click, setClick] = useState(false)
  return (
    <div className="App">
    <header className="header">
    <div className="left-side">
    <div className="logo">
    <img src="images/logo2.png" alt="not available"></img>
    
    
    </div>
    
    
    </div> 
    <div className="right-side">
    <ul className="site-links">
    <a href="/Home">Home</a>
    <a href="/About Us">About Us</a>
    <a href="./Services">Services</a>
    <a href="./Gallery">Gallery</a>
    <a href="./Videos">Videos</a>
    <a href="./Contact Us">Contact Us</a>
    
    
    </ul>

    <button className="menu" onClick={()=>{setClick(!click)}}> <MenuIcon/></button>
    {
      click&&(
      

        <Modal isOpen={true}  style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)'
          },
          content: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '2px',
            border: '1px solid #ccc',
            background: 'blue',
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}>
        <Zoom>
    
        <button onClick={()=>setClick(!click)} className="modal-close">x</button>
        <ul className="modal-ul">
        <a href="main page">Home</a>
        <a href="/About">About Us</a>
        <a href="main page">Services</a>
        <a href="main page">Gallery</a>
        <a href="main page">Videos</a>
        
        
        </ul>
        </Zoom>
      
        
        </Modal>
    
      )
    }
    
    </div> 
    
    </header>
    <main className="main">
    
    
    <Slider slider={products}/>
    <About/>
    <Gallery products={products}/>
    <Videos products={products}/>
    
  
    

    
    
    
    </main>
    <div className="footer">
   <p>Created & Developed By Deepak Sharma</p> 
    
    
    </div>



     
    </div>
  );
}

export default App;
