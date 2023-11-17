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
    <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
      <Container>
          <div className='flex justify-between'>
            {/* image and logo div */}
            <div>
              StoreName 
            </div>
            {/* search bar div*/}
            <div>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
            {/* Genre dropdown*/}
            <div>
              <GenreDropdown/>
            </div>
            {/* shopping cart */}
            <div>
              <Button
              variant="ghost"
              size="icon">
                <ShoppingCart/>
              </Button>
            </div>
            {/* Avatar Dropdown  */}
            <div>
              <AvatarButton/>
            </div>
            
          </div>
      </Container>
    </header>
  )
}

export default Header