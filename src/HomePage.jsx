import './App.css'
import SideBar from './SideBar'
import { useState } from 'react'


function NavBar(){
   
 return(
  <div class="NavbarContent">
  
  <h2><span>TOE3</span> SKINS</h2>
 </div>
 )
}
function Hero({setSideBar}){//controls the three line icon on top left 
  //to display the sidebar
 
  return(
    <>
    <div className='MenuBtn'>
        <img src='src\assets\icons8-menu-50.png'
      onClick={()=>{
        setSideBar("block")
      }}
      ></img>
      </div>

  

 
    <div className='BackGround'></div>
    
    <div className='HeroContent'>
      <h2>EXPLORE AMAZING TRUCK SKINS</h2>
      <p>Customize your trucks, Stand out on every road</p>
      
    </div>
    
    </>
  )
}


function Trending(props){//this function just returns a Trending card with 
  //the info passed to it as props

  return(
    <div className="TrendSkin">
      <div className="Image">
        <img src={props.image + ".jpeg"}
        width={props.width}
        height={props.height}
        ></img>
      </div>
      <div className="Description">
        <p>{props.Description}</p>
      </div>
    </div>
  )
}
function Trends({children}){ //this returns a div that holds all the trends pics
  return(
    <div className='ImageSlider'>
      {children}
    </div>
  )
}
//Lemme document this otherwise i'll be staring at this screen all day

export default function Home({setPage}){//setPage is passed from App.jsx
  //Which renders things on the screen. I have passed it here to open the catalogue
  //code at line 148

  //the useState below  renders the sideBar, the sideBar component is 
  //in its own file SideBar.jsx called at line 82
    const [sideBar , setSideBar]=useState("none");
   function ShowSideBar(){
    if(sideBar ==="none"){ return ""}
    if(sideBar ==="block")
  //this drained me, i can pass two useState props to the same component 
//then inside the component create the state that displays the publish form
      {return <SideBar setSideBar={setSideBar} setPage={setPage}/> }
   }

       return(
        <div className='Body'>
        <NavBar
        />
        <Hero
        setSideBar={setSideBar}/>
         {ShowSideBar()}
        <Trends>
        <h3>TRENDING SKINS</h3>

          <div className="ImageTrack">
            
            <div className='ImageGroup'>
              <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>
                          <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>
                    <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>
                          <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>



            </div>

            <div className='ImageGroup'>

                            <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>
                          <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>
                    <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>
                          <Trending
            image="./src/assets/image1"
            width="150px"
            height="100px"
            Description="Hot Moon THA Genshi Impact skin"
            ></Trending>


            </div>
           
            </div>
             <div className='NavigationBtn'>
              <button onClick={()=>{setPage("Catalogue")}}>ViewMore</button>
            </div>
          </Trends>
  
      </div>
    )
}