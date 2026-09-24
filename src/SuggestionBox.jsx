import { useState } from "react";

export default function Suggestions(){
    const [Suggestion ,setSuggestion]=useState("");
    function sendSuggestion(){
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=dmk.kerl@gmail.com
        &su=${""}&body=
      ${encodeURIComponent(Suggestion)}`)
    }
    function checkSuggestion(){
        try{
        if(Suggestion===""){
            window.alert("Cannot submit an empty suggestion");
        }
        else{
            console.log("This function is  being called")
            {sendSuggestion()};
        }
        }
        catch(error){
            console.log(error);
        }
        
    }
    return(
        <div className="SuggestionsForm">
       
               <p>Hey there!, thankyou for taking your time 
                to leave a suggestion or suggestions to help me
                make this website better.
                Below you'll just press the button which will open your gmail
                and you can send your suggestion to me.
               </p>
                <div className="SuggestionFields">

               <textarea placeholder="Type your suggestion here ..."
               value={Suggestion}
               onChange={(e)=>setSuggestion(e.target.value)}></textarea>
               <div className="SubmitSuggestionBtn">
                <button onClick={()=>{
                    checkSuggestion();
                    
                   
                }}>Send Suggestion
                     <img src="src\assets\arrow-right.png"
                     width="20px"></img></button>
               </div>
              
            </div>
        </div>
    )
}