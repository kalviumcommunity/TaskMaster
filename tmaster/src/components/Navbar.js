import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div id="navbar">
            <ul id="wish">
      <h1 id="message">Good Day, Vishal!</h1>
      <p id="tagline"> Let's do best today</p>
             </ul>
             <button className="search1">Search</button>
         </div>
         <hr id="hr2" />
         <div>
            <h1 id="your">Your Teams</h1>
            <div className='team'>
                <img  className="dp" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt='profile'></img>
                <p id="tagline">Team Name-1</p>
                <Link to='/secondpage'>
                <img className=" arrow" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"  alt="arrow" ></img>
                </Link>
            </div>
            <div className='team'>
                <img  className="dp" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt='profile'></img>
                <p id="tagline">Team Name-2</p>
                <img className=" arrow" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"  alt="arrow" ></img>
            </div>
            <div className='team'>
                <img  className="dp" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt='profile'></img>
                <p id="tagline">Team Name-3</p>
                <img className=" arrow" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"  alt="arrow" ></img>
            </div>
            <div className='team'>
                <img  className="dp" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt='profile'></img>
                <p id="tagline">Team Name-4</p>
                <img className=" arrow" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"  alt="arrow" ></img>
            </div>
         </div>
         
    </div>
  )
}

export default Navbar
