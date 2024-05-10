import React from 'react'
import {UserResource} from "@clerk/types"
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
interface HeaderProps{
    user : UserResource  | null |undefined ;
}

const header = ({user}:HeaderProps) => {
  return (
    <div className='bg-slate-500  h-[100px ] text-white shadow-lg justify-between items-center '>
      <div>
        <h1>logo</h1>
      </div>
      <h1>
        <Link href = "">
        {user?.username}
        </Link>

      
      </h1>
      <UserButton afterSignOutUrl='/'/>

    </div>
  )
}

export default header