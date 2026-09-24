import PreviewImg from './Preview.jsx';
import importicon from "/src/assets/import-icon.png"
import { useState } from 'react';
function SkinCard(props){
    console.log(props.skin)
    try{
            return(
        <div className="CardContainer">
            <div className="SkinImage">
                <img src={props.skin.image}
                width="200px"
                height="100px"></img>
            </div>
            <div className="SkinDetails">
            <p>{props.skin.skinName} skin for <span>{props.skin.Category}</span></p>
            </div>
           
            <div className="DownloadBtn">
                <a href={props.skin.image} download><img src={importicon}
                width="20px"></img></a>
                
                <button onClick={()=>props.preview(props.skin)}>Preview</button>
            </div>
             <div className='AuthorName'>
                <p> Author : {props.skin.Author}</p>
            </div>
        </div>
    )
    }
    catch(error){
        console.log(error);
    }
    
}
function Cards({children}){
    return(
        <div className="CatalogueGrid">
            {children}
        </div>
    
    )
}
export default function Catalogue({Skins}){
 
    console.log(Skins)
    //the useState below renders the Lightbox when preview button
    //is clicked
    const [PreviewSkin , setPreviewSkin] =useState(null);
    const [Preview, setPreview]=useState(false);
    function onPreview(skin){
        setPreviewSkin(skin);
        setPreview(true);
    }
    
    return(
           //the useState below maps through the skins and displays them on the 
    //catalogue
        <Cards>
            {Skins.map((skin)=>(
                <SkinCard
                key={skin.id}
                skin={skin}
                preview={onPreview}
                />
            ))}
        <>
        {Preview ? <PreviewImg 
        skinImage={PreviewSkin}
        setPreview={setPreview}/> : null}
        </>
   
        
        </Cards>
    )
}