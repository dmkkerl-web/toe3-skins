import { useState } from "react"
import './App.css'
export default function Publish({onPublish}){
 const [author, setAuthor] =useState("");
 const [name , setName] =useState("");
 const [image, setImage] =useState(null);
 const [category, setCategory]=useState("");



 function checkInputs(){
    if((name==="")||(author==="")||(image===null)||(category==="")){
        window.alert("All input fields must be filled! ");
    }
    else{
        {handlesubmit()};
        console.log("handlesubmit function is Being called");
    }
 }
  
    const handlesubmit=() =>{
    const publishData ={
        id:Date.now(),
        image:image,
        skinName:name,
        Author:author,
        Category:category
    }
    onPublish(publishData);
    console.log(publishData);
 }



 
return(
 <div className="PublishBody">
        <div className="container">
        <div className="PublishForm">
            <h3>Publish New Skin</h3>
            <div className="InputFields">
                <div className="Name">
                    <div className="Author">
                        <label>Author</label>
                        <input type="text"placeholder="eg: Anonymous"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        ></input>
                    </div>
                <label>Skin Name</label>
                <input type="text"placeholder=" eg: Genshin Impact"
                value={name}
                onChange={(e)=>setName(e.target.value)}></input>
                </div>
                
                   <label>Category</label>
                <select value={category} onChange ={(e)=> setCategory(e.target.value)}>
                 
                    <option value="">Select Category</option>
                    <option value="Moon-THA">Moon-THA</option>
                    <option value="Fiora">Fiora</option>
                    <option value="Stream">Stream</option>
                    <option value="Marieles">Marieles</option>
                     <option value="RefrigeratedContainer">Refrigerated Container</option>
                      <option value="CurtainSide Container">CurtainSide Container</option>
                       <option value="BoxContainer">Box Container</option>
                </select>
               
                <div className="Media">
                    <label>Attach File</label>
                    <input type="file"
                    accept="image/*"
                    onChange={
                        (e)=>{
                            const file =e.target.files[0];
                            if(!file)return;
                            const reader =new FileReader();
                            reader.onloadend=()=> setImage(reader.result);
                            reader.readAsDataURL(file);
                        }}
                        ></input>
                </div>
                <div className="Button">
                    <button className="PublishBtn"
                    onClick={checkInputs}
                    >Publish</button>
                 
                </div>
                </div>

            
        </div>
        </div>

 
        
        </div>
      
    )
}
