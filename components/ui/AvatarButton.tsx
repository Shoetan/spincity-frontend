"use client"


import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const AvatarButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=''>
        <Avatar>
          <AvatarImage></AvatarImage>
          <AvatarFallback className='text-bgColor'>ES</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=' border rounded-2xl w-56 mt-8 p-4'>
      <DropdownMenuLabel className='font-roboto text-lg' >Account</DropdownMenuLabel>
        <DropdownMenuSeparator className='border-b border-black' />
        <DropdownMenuItem className='mr-2 h-4 w-4 font-roboto text-lg cursor-pointer'>
          Login
        </DropdownMenuItem>
        <DropdownMenuItem className='mr-2 h-4 w-4 font-roboto text-lg mt-2 cursor-pointer'>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarButton