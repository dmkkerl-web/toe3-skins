import './App.css';
import Suggestions from './SuggestionBox.jsx';
import Home from './HomePage.jsx';
import Catalogue from './SkinsCatalogue.jsx';
import Publish from './PublishSkin.jsx';
import { useState , useEffect} from 'react';

export default function MyApp(){
  const [currentPage, setPage] = useState("Home");
  //the useState below sets the skins from publish and into the catalogue
  const [skins ,setSkins]=useState(()=>{
    try{
      const savedSkins=window.localStorage.getItem("skins");
      return savedSkins ? JSON.parse(savedSkins) : [];
    }
    catch (error){
      console.log(error);
    }
 
  });
  try{
  useEffect(()=>{
  window.localStorage.setItem("skins",JSON.stringify(skins));
},[skins]);
  }
  catch(error){
      console.log(error);
  }


   function HandlePublish(publishData){
    setSkins(prev => [...prev , publishData]);
 
    setPage("Catalogue");
    console.log(publishData);
   }

  //the useState below renders various pages on the screen


      function renderPage(){
        if(currentPage==="Home")return<Home setPage={setPage}/>
        if(currentPage ==="Catalogue")return<Catalogue Skins={skins}/>
        if(currentPage ==="Publish")return <Publish onPublish={HandlePublish}/>
        if(currentPage ==="Suggestions") return <Suggestions/>
      

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

