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
    return(
        <Cards>
        <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        />
         <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        />
         <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        />
         <SkinCard 
        image="/src/assets/image1"
        SkinDetails="Hot Genshin Impact skin for Moon-THA"
        width="200px"
        height="100px"
        />
        
        </Cards>
    )
}