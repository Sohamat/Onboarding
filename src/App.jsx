import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Input } from '@mantine/core';
import {NavLink,Route,Routes } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import Flat from './Components/Flat';
import Flatmates from './Components/Flatmates';


function App() {
  return (
    <>
    <div className='bg-zinc-50 h-screen w-full grid grid-cols-3 overflow-hidden'>
      <div className='bg-pink-100 col-span-2'>
        <img className='h-full w-full object-cover grayscale' src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className='bg-zinc-50 mx-auto flex flex-col justify-center w-[80%] space-y-2'>
          <h1 className='text-2xl font-thin tracking-tight mb-6'>Create your account with following options</h1>
          <button className='w-full px-2 py-3 bg-zinc-200 tracking-tighter font-semibold flex items-center justify-center gap-1'><img className='h-[25px] w-[25px]' src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" />Google</button>
          <button className='w-full px-2 py-3 bg-zinc-200 tracking-tighter font-semibold flex items-center justify-center gap-1'><img className='h-[25px] w-[25px]' src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />FaceBook</button>
          <h3 className='text-sm text-zinc-500 tracking-tight flex items-center justify-center gap-3 p-8'><div className='w-[70px] h-[1px] bg-zinc-500 '></div>or sign with number<div className='w-[70px] h-[1px] bg-zinc-500'></div></h3>
           <h5 className='text-[12px] text-zinc-500 tracking-tighter font-semibold pt-3 pl-3'>Number:</h5>
           <h3 className='flex flex-col  justify-center pb-8 pl-3'>
           <div className='flex gap-2'>
           <Input className='w-[30%] border-b-2 border-zinc-400 text-center' type="number" placeholder='+91' ></Input>
            <Input className='w-[60%] border-b-2 border-zinc-400 text-center' type='number' placeholder='8433616313'></Input>
           </div>
           <h5 className='tracking-tighter font-semibold text-sm pt-2'>Already have an account?<span className='text-orange-600'> Login</span></h5>
</h3>

           <button className='bg-orange-600 text-zinc-50 px-2 py-3 w-full tracking-tighter font-semibold text-sm flex items-center justify-center gap-4'>sign up <FaArrowRightLong /></button>
          <h6  className='text-sm text-zinc-500 tracking-tighter pt-[50px]'>Need Help ?</h6>
      </div>
    </div>
    <div className='bg-zinc-50 h-screen w-full grid grid-cols-3 overflow-hidden'>
      <div className='grid grid-rows-4 grid-cols-5 col-span-2 bg-zinc-300'>
         <div className='bg-zinc-500 col-span-2 row-span-3'style={{ backgroundImage: 'url(./src/assets/Building1.png)' }}>
         </div>
         <div></div>
         <div className="bg-pink-600 col-span-2" style={{ backgroundImage: 'url(./src/assets/computer.png)' }}>
         </div>
         {/* <div></div> */}

         {/* <div></div>
         <div></div> */}
         <div className='bg-zinc-50 col-span-3 row-span-2 py-6 px-9'>
          <h1 className='text-zinc-900 text-3xl tracking-tight font-semibold py-2'>Create Profile</h1>
          <h5 className='font-semibold text-sm'>Select your preference</h5>

         </div>
         {/* <div></div>
         <div></div>
 */}
         {/* <div></div>
         <div></div> */}
         {/* <div></div>
         <div></div>
         <div></div> */}

         <div></div>
         <div></div>
         <div className='bg-pink-200 col-span-2' style={{ backgroundImage: 'url(./src/assets/girlSitting.png)' }}>
         </div>
         <div></div>
         </div>
         <div className='mx-auto overflow-hidden'>
            <div className=' option w-full h-[20%]  flex items-start justify-center flex-col p-2 mx-auto'>
              <h5 className='text-zinc-800 font-semibold'>I'm looking for</h5>
              <div className='flex pt-3 gap-6'> 
              {/* px-10 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center bg-zinc-100' */}
              <NavLink to="/flat" className={({ isActive }) =>
     isActive ? "px-10 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center text-white bg-zinc-800" : "px-10 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center bg-zinc-100"
  }
>
              <IoIosHome />Flat
              </NavLink>
              <NavLink to="/flatmates" className={({ isActive }) =>
     isActive ? "px-10 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center text-white bg-zinc-800" : "px-10 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center bg-zinc-100"
  }>
              <FaUsers />Flatmates
              </NavLink>
              </div>
            </div>


      <Routes>
      <Route path="/" element={<Flatmates/>}>
        <Route
          path="flatmates"
          element={<Flatmates/>}
        />
        <Route 
        path="flat" 
        element={<Flat/>} 
        />
      </Route>
      </Routes>
        

         </div>
    </div>
    </>
   
  )
}

export default App