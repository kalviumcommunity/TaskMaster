import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Main from './Main'
import Seconpage from './Seconpage'
import Thirdpage from './Thirdpage'
export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/firstpage' element={<Main/>}></Route>
        <Route path='/secondpage' element={<Seconpage/>}></Route>
        <Route path='/thirdpage' element={<Thirdpage/>}></Route>
      </Routes>
    </div>
  )
}
