import React from 'react'
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import Navbar from './Navbar';
// import Thirdpage from './Thirdpage';
function Main() {
  return (
    <div className='App'>
       <Sidebar/>
      <Navbar/>
      <Sidebar2/>
      {/* <Thirdpage/> */}
    </div>
  )
}

export default Main
