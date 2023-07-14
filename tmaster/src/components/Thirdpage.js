import React from 'react'
import '../App.css';
import Logo from '../images/logo.jpeg'
import Profile from '../images/profile.png'
import { Link } from 'react-router-dom';


function Thirdpage() {
  return (
    <div className='thirdpage'>
        <div id='thirdsidepage'>
            <div id='thirdside1'>
                <div className='se'>
                    <Link to='/firstpage'>
                    <img id="logo" src= {Logo} alt='logo'/>
                    </Link>
                    <button className="search1">Search</button>
                </div>
                <br></br>

                <div>
                    <h1 className='activitytext'><h5>Your Activity</h5></h1>
                    <hr/>
                    <br></br>
                    <div className='activity'>
                        <div className="completedtasks">
                            
                            <h2>Completed Tasks</h2>
                            
                        </div>
                        <div className='onhold'>
                            <h2>On Hold</h2>
                        </div>
                
                    </div>
                    
                </div>

            </div>

            <div id='thirdsidepage2'>
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

export default Thirdpage
