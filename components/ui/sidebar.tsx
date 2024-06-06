"use client"
import Link from 'next/link'
import React from 'react'
import { IoCalculator, IoHome } from 'react-icons/io5'
import { ItemSidebar } from './item-sidebar'

export const Sidebar = () => {
  return (
    <div className={`
      hidden 
      bg-gradient-to-b
      from-blue-400
      to-blue-900
      w-12
      h-screen
      sm:absolute
      sm:flex 
      justify-center
      gap-8
      items-center
      flex-col
      hover:w-[200px]
      hover:items-start
      hover:pl-2
      z-[999]
      ease-out
      transition-all
      duration-300
      `}>
        <ItemSidebar href='/' name='Inicio' icon={IoHome}/>
        <ItemSidebar href='/calculator' name='Calculadora' icon={IoCalculator}/>
      </div>
  )
}
