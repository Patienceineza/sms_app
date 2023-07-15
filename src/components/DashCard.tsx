import React from 'react'
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";

function DashCard( {balance, data,icon}:any) {
  return (
    <div className="w-full flex flex-col items-center justify-center shadow-md border rounded-md cursor-pointer bg-white">

    <div className="flex flex-row  py-4 justify-around items-end ">
      <div>
        <p className="text-[1.5em] font-bold text-gray-700">{balance}</p>
        <p className="text-[1em] text-gray-500 ">{data}</p>
      </div>
      <div className='flex flex-row justify-center items-center rounded-full'>
        {icon}
      </div>
    </div>
  </div>
  )
}

export default DashCard