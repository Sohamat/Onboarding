import React from 'react'
import ImageUpload from './ImageUpload'
import { FaRegUserCircle } from 'react-icons/fa'
import FirstName from './FirstName'
import LastName from './LastName'
import FlatmatePreference from './FlatmatePreference'
import LanguageSpeak from './LanguageSpeak'
import Gender from './Gender'
import Religious from './Religious'
function Flatmates() {
  return (
    <div className='bg-zinc-50 h-full'>
       <div className='flex items-center justify-center gap-3 pt-3 pb-2'>
        <FaRegUserCircle className='text-[40px]'/>
        <ImageUpload  />
        </div>
        <div className='flex gap-2'>
        <FirstName/>
        <LastName/>
        </div>
        <div className='flex gap-[100px] pt-3 justify-center mx-auto '>
         <Gender />
         <Religious/>
        </div>
        <FlatmatePreference  />
         <LanguageSpeak/>
         <button className='w-full py-3 bg-orange-500 font-semibold text-white mt-[60px] tracking-tight'>Continue</button>
         <button className='w-full py-1 bg-zinc-50 font-semibold text-orange-600 mt-[5px] tracking-tight border-[1px] border-orange-200'>List Now</button>
         <h6  className='text-sm text-zinc-500 tracking-tighter pt-[25px] underline'>Need Help ?</h6>

        
    </div>
  )
}

export default Flatmates