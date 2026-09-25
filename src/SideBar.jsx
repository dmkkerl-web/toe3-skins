import './App.css'

export default function SideBar({setSideBar,setPage}){
    return(
     <div className='SideBar'>
      <ul className='links'>
       <li onClick={()=>{
        setPage("Publish"),setSideBar("none")
       }}>Publish Skin</li>
      <li><a href='#about'>About</a></li>
       <li><a href='#contacts'>Contact</a>
       </li>
       <li onClick={()=>{
        setPage("Suggestions")
       }}>How can I improve this Site?</li>
      </ul>
      <div className='CloseBtn'>
       <p onClick={()=>setSideBar("none")}> Close</p>
        
      </div>
      </div>
    )
}