import Preview from './Preview.jsx'

import { useState } from 'react';
function SkinCard(props){
    return(
        <div className="CardContainer">
            <div className="SkinImage">
                <img src={props.image + ".jpeg"}
                width={props.width}
                height={props.height}></img>
            </div>
            <div className="SkinDetails">
                {props.SkinDetails}
            </div>
            <div className="DownloadBtn">
                <a href={props.image} download><img src="src\assets\import-icon.png"
                width="20px"></img></a>
                <button onClick={props.preview}>Preview</button>
            </div>
        </div>
    )
}
function Cards({children}){
    return(
        <div className="CatalogueGrid">
            {children}
        </div>
    
    )
}
export default function Catalogue(){
    const [Preview, setPreview]=useState(false);
    function onPreview(){
        setPreview(true);
    }
    
    return(
        <Cards>
        <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        preview={onPreview}

        />
         <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        preview={onPreview}
        />
         <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        preview={onPreview}
        />
         <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        preview={onPreview}
        />
        <>
                {Preview ? <Preview setPreview={setPreview}
                image="/src/assets/image1"/> : null }
                
        </>
        
   
        
        </Cards>
    )
}