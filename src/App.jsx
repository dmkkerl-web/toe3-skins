import './App.css';
import Home from './HomePage.jsx';
import Catalogue from './SkinsCatalogue.jsx';
import Publish from './PublishSkin.jsx';
import { useState } from 'react';

export default function MyApp(){

  const [currentPage, setPage] = useState("Home");

      function renderPage(){
        if(currentPage==="Home")return<Home setPage={setPage}/>
        if(currentPage ==="Catalogue")return<Catalogue/>
        if(currentPage ==="Publish")return <Publish/>

        }

  return(
    <>
    <div className='NavBtns'>
      <img onClick={()=>setPage("Home")}src='src\assets\icons8-home-50.png'></img>
      <img onClick={()=>setPage("Catalogue")} src='src\assets\icons8-gallery-24.png'></img>
    </div>
    
      {renderPage()}
    
    </>
 
  )
}

