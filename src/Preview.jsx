import './App.css'
export default function Preview(props){
    return(
        <div className="LightBox">
            <div className="LightBoxImg">
                <img src={props.image}
                width="200px"
                height="100px">
                    
                </img>
            </div>
        </div>
    )

}