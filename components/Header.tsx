"use client"



import React from 'react'
import Container from './ui/container'
import { Button } from './ui/button'
import { Input } from './ui/input'
import GenreDropdown from './ui/GenreDropdown'
import AvatarButton from './ui/AvatarButton'
import { ShoppingCart } from 'lucide-react'



const routes =[
  {
    "href": "/",
    "label": ""
  }
]
const Header = () => {
  return (
    <header className='sm:flex sm:justify-between py-3 px-4 border-b bg-secondary/75'>
      <Container>
          <div className='flex flex-row items-center gap-10'>
            {/* image and logo div */}
            <div className='font-roboto basis-2/12'>
              <h1 className='font-roboto text-4xl text-bgColor'>SpinCity</h1> 
            </div>
            {/* search bar div*/}
            <div className='basis-7/12'>
                <Input type="text" placeholder="" />
            </div>
            {/* Genre dropdown*/}
            <div className='basis-2/12'>
              <GenreDropdown/>
            </div>
            {/* shopping cart */}
            <div className='basis-2/12'>
              <Button
              variant="ghost"
              size="icon">
                <div>
                  <ShoppingCart color='white'/>
                </div>
              </Button>
            </div>
            {/* Avatar Dropdown  */}
            <div className='basis-2/12'>
              <AvatarButton/>
            </div>
            
          </div>
      </Container>
    </header>
  )
}

export default Header