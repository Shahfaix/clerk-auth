import React from 'react'
import {UserResource} from "@clerk/types"
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
interface HeaderProps{
    user : UserResource  | null |undefined ;
}

const header = ({user}:HeaderProps) => {
  return (
    <div className=' flex bg-slate-500  h-[100px] text-white shadow-lg justify-between items-center px-2 '>
      <div>
        <h1 className='text-4xl'>logo</h1>
      </div>

      <div className='flex flex-row gap-2'>
      <h1>
        <Link href = "">
        {user?.username}
        </Link>

      
      </h1>
      <UserButton afterSignOutUrl='/'/>
      </div>
    </div>
  )
}

export default header