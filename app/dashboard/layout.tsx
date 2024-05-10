"use client";
import React from 'react'
import Header  from '@/components/header'
import { useUser } from '@clerk/nextjs'

const DashboardLayout = ( {children}: {children:React.ReactNode}) => {
    const {user } = useUser();
  return (
    <div>
    <Header user={user} />
        {children}</div>
  )
}

export default DashboardLayout