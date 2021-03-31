import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'

function App() {
  const [click, setClick] = useState(false)
  return (
    <div className="App">
    <header className="header">
    <div className="left-side">
    <div>logo</div>
    
    
    </div> 
    <div className="right-side">
    <button className="menu" onClick={()=>{setClick(!click)}}> menu bar</button>
    {
      click&&(
      

        <Modal isOpen={true}>
        <Zoom>
    
        <button onClick={()=>setClick(!click)} className="modal-close">x</button>
        <ul className="modal-ul">
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        
        
        </ul>
        </Zoom>
      
        
        </Modal>
    
      )
    }
    
    </div> 
    
    </header>
     
    </div>
  );
}

export default App;
