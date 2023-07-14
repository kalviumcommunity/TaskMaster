import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import Logo from '../images/logo.jpeg'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div>
        <img id="logo" src= {Logo} alt='logo'/>
        </div>
        <ul className='SidebarList'>
      {SidebarData.map((val,key)=>{
        return (
            <li key={key} className='row' > 
            {" "}
             <div id="icon">{val.icon}</div>{" "}
             <div id="title">
                {val.title}
             </div>
             </li>
        )
      })}
        </ul>
    </div>
  )
}

export default Sidebar
