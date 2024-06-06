"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const paths: { [key: string]: string } = {
  "/": "Home",
  "/calculator": "Calculadora de divisas",
  "/currencies/new": "New Currency",
  "/currencies/edit": "Edit Currency",
}

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className='bg-blue-500 pr-2 w-full h-24 rounded-lg flex items-center'>
      <h1 className='text-white text-2xl font-bold ml-10'>{paths[pathname]}</h1>
    </div>
  )
}
