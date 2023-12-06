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

import { useRouter } from 'next/navigation'

const AvatarButton = () => {

  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=''>
        <Avatar>
          <AvatarImage></AvatarImage>
          <AvatarFallback className='text-bgColor font-poppins'>ES</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=' border rounded-2xl w-56 mt-9 p-4'>
      <DropdownMenuLabel className='font-poppins text-lg' >Account</DropdownMenuLabel>
        <DropdownMenuSeparator className='border-b border-black' />
        <DropdownMenuItem className='mr-2 h-4 w-4 font-poppins text-lg cursor-pointer' onClick={()=> {router.push("/auth/register")}   }>
          Register
        </DropdownMenuItem>
        <DropdownMenuItem className='mr-2 h-4 w-4 font-poppins text-lg mt-2 cursor-pointer'>
          Signin
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarButton