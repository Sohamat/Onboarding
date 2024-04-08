import React from 'react'
import ImageUpload from './ImageUpload.jsx'
import { FaRegUserCircle } from "react-icons/fa";
import FlatmatePreference from './FlatmatePreference.jsx';
import LanguageSpeak from './LanguageSpeak.jsx';

function Flat() {
  return (
    <div className=' h-full'>
        <div className='flex items-center justify-center gap-3 pt-8'>
        <FaRegUserCircle className='text-[60px]'/>
        <ImageUpload  />
        </div>
         <FlatmatePreference  />
         <LanguageSpeak/>
         <button className='w-full py-3 bg-orange-500 font-semibold text-white mt-[60px] tracking-tight'>Continue</button>
         <button className='w-full py-1 bg-zinc-50 font-semibold text-orange-600 mt-[5px] tracking-tight border-[1px] border-orange-200'>List Now</button>
         <h6  className='text-sm text-zinc-500 tracking-tighter pt-[50px] underline'>Need Help ?</h6>

    </div>
  )
}

export default Flat