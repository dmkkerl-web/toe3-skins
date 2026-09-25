import './App.css'

export default function PreviewImg({setPreview, skinImage}){
    console.log(skinImage)
    return(
        <div className="LightBoxContainer">
                    <div className="LightBox">
            <div className='close'>
                <p onClick={()=>setPreview(false)}>Close</p>

 
                
            </div>
            <div className="LightBoxImg">
                <img src={skinImage.image}
                width="200px"
                height="100px">
                    
                </img>
            </div>
        </div>
            
        </div>

    )

}