"use client"

import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import React from 'react'

const page = () => {
  return (
    <div>
      <Container>
        <div className='border border-primary/30 rounded-md max-w-2xl max-h-auto  mx-auto mt-24 flex flex-col items-start p-8 m-8' >
          <div className='flex flex-col w-full h-16 mb-6'>
            <label className='font-poppins'>Your name</label>
            <input type='text' className='border w-full h-full rounded-lg p-3'/>  
          </div>
          <div className='flex flex-col w-full h-16 mb-6'>
            <label className='font-poppins'>Email</label>
            <input type='email' className='border w-full h-full rounded-lg p-3'/>  
          </div>
          <div className='flex flex-col w-full h-16 mb-6'>
            <label className='font-poppins'>Password</label>
            <input type='text' className='border w-full h-full rounded-lg p-3'/>  
          </div>
          <div className='flex flex-col w-full h-16 mb-6'>
            <label className='font-poppins'>Re-enter password</label>
            <input type='text' className='border w-full h-full rounded-lg p-3'/>  
          </div>
          <Button variant="secondary" size="full" className='mb-6' >
            Continue
          </Button>

          <div className='font-poppins'>
            <p>Already have and account? <span className='text-accent text-lg cursor-pointer hover:text-popover'>Sign in</span></p>
          </div>
        </div>
        
      </Container>
    </div>
  )
}

export default page