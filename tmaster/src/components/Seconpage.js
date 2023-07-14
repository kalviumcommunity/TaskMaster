import React from 'react'
import '../App.css';
import Logo from '../images/logo.jpeg'
import Profile from '../images/profile.png'
import { Link } from 'react-router-dom';



function Seconpage() {
  return (
    <div class="Secondpage">
        <div className='sidepage'>
         <div id="Side1"> 
            <div className='se'>
                <Link to='/firstpage'>
             <img id="logo" src= {Logo} alt='logo'/>
                </Link>
             <button className="search1">Search</button>
             </div>
            
             <div id="content">
                <Link to='/thirdpage'>
                <h1 className='heading'>Tasks For The team</h1>
                </Link>

                <button id="adds"> <img className="addicon" src="https://static.thenounproject.com/png/3548637-200.png" alt="addicon"/> Add Team </button>
                
             </div>
             <div className="teamtasks">
                <p>Complete the figma design</p>
                <div>
                    
                <button className="staus1"> Completed  <img className='downarrow' src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/arrow-down-icon-png-3.png" alt="downarrow"/></button>
                    
                <p className='duedate'>Due date : 16/06/23 </p>
                </div>
            </div>
            <div className="teamtasks">
                <p>Complete the figma design</p>
                <div>
                <button className="staus1"> Completed  <img className='downarrow' src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/arrow-down-icon-png-3.png" alt="downarrow"/></button>
                <p className='duedate'>Due date : 16/06/23 </p>
                </div>
            </div>
            <div className="teamtasks">
                <p>Complete the figma design</p>
                <div>
                <button className="staus2"> Still pending  <img className='downarrow' src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/arrow-down-icon-png-3.png" alt="downarrow"/></button>
                <p className='duedate'>Due date : 16/06/23 </p>
                </div>
            </div>
            <div className="teamtasks">
                <p>Complete the figma design</p>
                <div>
                <button className="staus1"> Completed  <img className='downarrow' src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/arrow-down-icon-png-3.png" alt="downarrow"/></button>
                <p className='duedate'>Due date : 16/06/23 </p>
                </div>
            </div>
            <div className="teamtasks">
                <p>Complete the figma design</p>
                <div>
                <button className="staus2">  Still Pending <img className='downarrow' src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/arrow-down-icon-png-3.png" alt="downarrow"/></button>
                <p className='duedate'>Due date : 16/06/23 </p>
                </div>
            </div>

         </div>
    
        <div id="Side2">
         <div className='top2'>
            <img id="profile" src= {Profile} alt='profile'/>
        <div>
            <h2 id="teamname">Team Name <img className="downarrow2" src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/arrow-down-icon-png-3.png" alt="downarrow2" /></h2>
        </div>
        </div>
        <hr id="hr1" />
        <div className='description'>
            <h2 className="text">Project Description</h2>
            <p id="describe">A time bound process with 5 phases. (Understand,ideate,design,prototype,test)
              Main goal is to solve a critical design problem through designing, prototyping and testing ideas.</p>

        </div>
        <hr id="hr1" />
        <div>
            <h2 id="teammem">Team members</h2>
            <div className='mem'>
            <img className="profilemem" src= {Profile} alt='profile'/>
             <p>Vishal</p>
            </div>
            <div className='mem'>
            <img className="profilemem" src= {Profile} alt='profile'/>
             <p>XYZ</p>
            </div>
            <div className='mem'>
            <img className="profilemem" src= {Profile} alt='profile'/>
             <p>YXS</p>
            </div>
            <div className='mem'>
            <img className="profilemem" src= {Profile} alt='profile'/>
             <p>YZX</p>
            </div>
        </div>
        </div>
     </div>
      
    </div>
  )
}

export default Seconpage
