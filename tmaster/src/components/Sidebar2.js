import React from 'react'
import '../App.css';
import Profile from '../images/profile.png'
import Calender from '../images/Calender.jpeg'


function Sidebar2() {
  return (
    <>
    <div className='Sidebar2'>
        <div className='top'>
        <img id="profile" src= {Profile} alt='profile'/>
        <div>
           <ul id="info">
            <h4>VISHAL REDDY</h4>
               <p id="mail">@vishalreddy37</p> 
           </ul>
          
        </div>
        
        </div>
        <hr id="hr1" />
        <div>
            <h4 id="calendername">Calendar</h4>
        <img id="calender" src= {Calender} alt='Calender'/>
        </div>
        <div>
            <h4 id="schedule">Schedule</h4>
            <div id="Tasks">
            <div className="Task">
                <button className="task">Task 1</button>
                <p className='date'>13 June</p>
            </div>
            <div className="Task">
                <button className="task">Task 2</button>
                <p className='date'>21 June</p>
            </div>
            <div className="Task">
                <button className="task">Task 3</button>
                <p className='date'>28 June</p>
            </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Sidebar2
