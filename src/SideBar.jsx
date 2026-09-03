import './App.css'
export default function SideBar({setSideBar,setPage}){
    return(
     <div className='SideBar'>
      <ul className='links'>
       <li onClick={()=>{
        setPage("Publish"),setSideBar("none")
       }}>Publish Skin</li>
       <li>Contact</li>
       <li>About</li>
      </ul>
      <div className='CloseBtn'>
        <img src='src\assets\close.png' width="20px"
        onClick={()=>setSideBar("none")}></img>
      </div>
      </div>
    )
}