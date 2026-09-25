import './App.css'
import close from "/src/assets/close.png"
export default function PreviewImg({setPreview, skinImage}){
    console.log(skinImage)
    return(
        <div className="LightBoxContainer">
                    <div className="LightBox">
            <div className='close'>
                <img src={close}
                alt='close'

                onClick={()=>setPreview(false)}
                width="20px"></img>
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