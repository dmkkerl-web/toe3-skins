import './App.css'
import SideBar from './SideBar'
import { useState } from 'react'



function NavBar({setSideBar}){
   
 return(
  <>
<div className="NavbarContent">
  
  <h2><span>TOE3</span> SKINS</h2>
   <div className='MenuBtn'>
        <img src='src\assets\icons8-menu-50.png'
      onClick={()=>{
        console.log("clicked")
        setSideBar("block");
      }}
      ></img>
      </div>
   </div>

  
  </>

 )
}
function Hero(){
 
  return(
    <>
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
        <img src={props.image}
      
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
    if(sideBar ==="block"){
      return <SideBar setSideBar={setSideBar} setPage={setPage}/>
     }
   }

       return(
        <div className='Body'>
        
        <NavBar

          setSideBar={setSideBar}
        />
           {ShowSideBar()}
        <Hero
        />
        
        <Trends>
        <h3>TRENDING SKINS</h3>

          <div className="ImageTrack">
            
            <div className='ImageGroup'>
              <Trending
            image="/src/assets/toe3skins/amber.jpg"
            width="150px"
            height="100px"
            Description="Mera-Amber Skin"
            ></Trending>
                          <Trending
            image="/src/assets/toe3skins/404.png"
            width="150px"
            height="100px"
            Description="404 Error Skin"
            ></Trending>
                    <Trending
            image="/src/assets/toe3skins/animeBoy.png"
            width="150px"
            height="100px"
            Description="Jujutsu Skin"
            ></Trending>
                          <Trending
            image="/src/assets/toe3skins/animeGirl.png"
            width="150px"
            height="100px"
            Description="Pink Anime Character Skin"
            ></Trending>



            </div>

            <div className='ImageGroup'>

                            <Trending
            image="/src/assets/toe3skins/ninja.png"
            width="150px"
            height="100px"
            Description="Walking Ninja Skin"
            ></Trending>
                          <Trending
            image="/src/assets/toe3skins/eagle.png"
            width="150px"
            height="100px"
            Description="Eagle Skin"
            ></Trending>
                    <Trending
            image="/src/assets/toe3skins/scooby.jpg"
            width="150px"
            height="100px"
            Description="Scooby Doo Skin"
            ></Trending>
                          <Trending
            image="/src/assets/toe3skins/shades.png"
            width="150px"
            height="100px"
            Description="Shades Skin"
            ></Trending>


            </div>
           
            </div>
             <div className='NavigationBtn'>
              <button onClick={()=>{setPage("Catalogue")}}>ViewMore
                <img src='src\assets\arrow-right.png'
                width="20px"></img>
              </button>
            </div>
            
          </Trends>
          <section className='AboutSection'id='about'>
              <h3>About Truckers Of Europe 3 skins (TOE3)</h3>
              <p> The TOE3 skins webApp is designed to host the best 
                skins uploaded by volunteers for you to customize your truck 
                or trailer and standout on every road!.
                Anybody can easily upload their skins  by pressing on the three 
                lines at the top left of the navbar and clicking " Publish", which
                immediately takes you to the publish page and you're required to fill in 
                the specified fields for 
               
                 <li>1.<b>Author:</b> your Name</li>
                 <li>2.<b>SkinName:</b> Prefered name of the skin you're publishing</li>
                 <li>3.<b>Category: </b> What truck is your skin for?</li>
                 <li>4.<b>File attachment:</b> here you're required to upload the
                   skin itself, you will select it from your files </li>
               
               then hit publish and your skin is added to the catalogue where other players
               can be able to access it.

    

              </p>
            </section>
            <section className='Notice'>
              <div className='NoticeBox'>
                <h2>NOTICE</h2>
                <ul>
                  <li> Right now, users can publish skins for 
                    four trucks including: (marieles, 
                  moonTHA, stream and fiora), other options will be available soon</li>
                  <li>
                    This current page is just a mockup, and more features will be added soon,
                    all important features are available.
                  </li>
                </ul>
                
              </div>
            </section>
            <section className='Contacts' id='contacts'>
              <div className='ContactForm'>
                <h3>Contact the Developer</h3>
                <div className='ContactIcons'>
                <img src='src\assets\apple.png'width="30px"
                onClick={()=>
                  window.open(`https://wa.me/254112507193?text=${encodeURIComponent
                    ("Hello, I have a question about your TOE3 skins web App") }`)}
                    target="_blank"
                    rel="noopener noreferrer"></img>
                <img src='src\assets\communication.png'width="30px"
                onClick={()=>
                  window.open("https://www.facebook.com/Dev Dennis","_blank")
                }></img>
                <img src='src\assets\github.png'width="30px"
                onClick={()=>
                  window.open("https://github.com/dmkkerl-web","_blank")
                }></img>
                <img src='src\assets\linkedin (1).png'width="30px"
                onClick={()=>
                  window.open("https://www.linkedin.com/in/dennis-mutua-a24991409","_blank")
                }></img>
                
                </div>
                <p>All icons sourced from Flaticon.com</p>
                <p>&copy; 2026, DevDennis. All Rights Reserved</p>
              </div>
            </section>
      </div>
    )
}