import React, {  useState,useRef } from "react";
import Navbar from './libio/navbar'
import Card from "./libio/Card"; 
import Simpleslider from "./libio/Slider"; 
import Footer from "./libio/Footer";
import  LabTabs from "./libio/Tabs"
import { BrowserRouter,Routes,Route} from "react-router-dom";

import Aboutus from "./libio/Aboutus";

import Contact from "./libio/contactus";

import Milkshakes from "./libio/card/Milkshakeitems";
import Freshjuice from "./libio/card/Freshjuiceitems";
import Icecreamsitems from "./libio/card/Icecreamitems";
import Mojitoitems from "./libio/card/Mojitoitems";
import Menu from "./Menu";
import Firebase from "./libio/Firebase";
import Fiedrice from "./libio/card/Friedriceitems";

 

const App = () => {
  
  const navRef=useRef()
  function scroll(){
navRef.current.scrollIntoView({behavior:'smooth'})
  }
        return(
           <div>
      
            
            <BrowserRouter>
                <div ref={navRef} >
            <Navbar /></div>
           
              
            <Routes>
                 <Route path="/" element={ <Simpleslider/>}/>
                 <Route path="/menu" element={ <Menu/>}/>
                <Route path="/About" element={<Aboutus/>}/> 
                 <Route path="/contactus" element={  <Contact scroll={scroll}/>}/>

                  <Route path="/milkshake" element={<Milkshakes  scroll={scroll} />}/>
                  <Route path="/freshjuice" element={  <Freshjuice scroll={scroll}/>}/> 
                  <Route path="/icecreams" element={  <Icecreamsitems  scroll={scroll}/>}/>
                  <Route path="/mojitos" element={ <Mojitoitems  scroll={scroll}/>}/>
                  <Route path="/frieditems" element={<Card scroll={scroll} />}/>
                  <Route path="/nextpage" element={<Firebase scroll={scroll} />}/> 
                  <Route path="/fastfood" element={<Fiedrice scroll={scroll} />}/>  
                  <Route path="/explore" element={<Menu scroll={scroll} />}/>  
              </Routes> 
             
                   
             <Footer/>  


            

            </BrowserRouter>  
           
          </div>    
  )
}

export default App;
