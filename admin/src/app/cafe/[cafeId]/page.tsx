"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const Page = () => {
    const pathname  = usePathname();
    const segments = pathname?.split('/');
    const cafeId = segments && segments.length > 2 ? segments[2] : 'No ID found';
  return (
    <div>Cafe Id: {cafeId}</div>
  )
}

export default Page