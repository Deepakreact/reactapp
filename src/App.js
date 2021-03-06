
import './App.css';
import React,{useState} from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import Modal from 'react-modal'
import TwitterIcon from '@material-ui/icons/Twitter';
import Zoom from 'react-reveal/Zoom'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'


import HomePage from './Componants/HomePage';
import MenuIcon from '@material-ui/icons/Menu';
import AboutPage from './Componants/AboutPage';
import GalleryPage from './Componants/GalleryPage';
import VideoPage from './Componants/VideoPage';
import ContactPage from './Componants/ContactPage';
import ServicePage from './Componants/ServicePage';



function App() {
  const [click, setClick] = useState(false)
  return (
    <Router>
    <div className="App">
    <header className="header">
    <div className="left-side">
    <div className="logo">
    <img src="images/logo2.png" alt="not available"></img>
    
    
    </div>
    
    
    </div> 
    <div className="right-side">
    <ul className="site-links">
    <Link to="/">Home</Link>
    <Link to="/About">About Us</Link>
    <Link to="/Service">Services</Link>
    <Link to="/Gallery">Gallery</Link>
    <Link to="/Videos">Videos</Link>
    <Link to="/Contact">Contact Us</Link>
    
    
    </ul>

    <button className="menu" onClick={()=>{setClick(!click)}}> <MenuIcon/></button>
    {
      click&&(
      

        <Modal  className="modal" isOpen={true}  style={{
          overlay: {
            position: 'fixed',
        
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
    
        
        <ul className="modal-ul">
        <Link to="/" onClick={()=>setClick(!click)} >Home</Link>
        <Link to="/About" onClick={()=>setClick(!click)}>About Us</Link>
        <Link to="/Service" onClick={()=>setClick(!click)}>Services</Link>
        <Link to="/Gallery"onClick={()=>setClick(!click)}>Gallery</Link>
        <Link to="/Videos"onClick={()=>setClick(!click)}>Videos</Link>
        <Link to="/Contact"onClick={()=>setClick(!click)}>Contact Us</Link>
        
        
        </ul>
        <button onClick={()=>setClick(!click)} className="modal-close">x</button>
        </Zoom>
      
        
        </Modal>
    
      )
    }
    
    </div> 
    
    </header>
    <ul className="social-links">
    <a href="https://www.facebook.com/djashfilmproductionhouse/" className="fb-icon"><FacebookIcon/> </a>
    <a href="https://www.youtube.com/channel/UC346gtuIUPFYQ0IKAhj1K0Q" className="yt-icon"><YouTubeIcon/> </a>
    <a href="https://www.instagram.com/djashgroup/" className="i-icon"> <InstagramIcon/></a>
    <a href="https://www.twitter.com/djashgroup?s=08" className="i-icon"> <TwitterIcon/></a>
    
    
    </ul>


    <main className="main">
    <Switch>
    <Route path="/"  exact component={HomePage}  />
    <Route path="/About" component={AboutPage}  />
    <Route path="/Gallery" component={GalleryPage}  />
    <Route path="/Videos" component={VideoPage}  />
    <Route path="/Contact" component={ContactPage}  />
    <Route path="/Service" component={ServicePage}  />
   
    
    
    
    </Switch>
    

    
  
    

    
    
    
    </main>
    <footer>
    
    <div className="f-left">
    <a href="https://www.facebook.com/djashfilmproductionhouse/" className="fb-icon"><FacebookIcon style={{ color:'white'}}/> </a>
    <a href="https://www.youtube.com/channel/UC346gtuIUPFYQ0IKAhj1K0Q" className="yt-icon"><YouTubeIcon  style={{ color:'white'}}/> </a>
    <a href="https://www.instagram.com/djashgroup/" className="i-icon"> <InstagramIcon  style={{ color:'white'}}/></a>
    <a href="https://www.twitter.com/djashgroup?s=08" className="i-icon"> <TwitterIcon  style={{ color:'white'}}/></a>
 
    
    </div>
    <div className="f-right">
    <p>@copyright Created & Developed By Deepak Sharma</p>
    
    </div>

    
    
    </footer>
    

    
   
    
    




     
    </div>
    </Router>
  );
}

export default App;
