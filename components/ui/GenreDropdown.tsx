"use client"



import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ListItem } from './ListItem';
import { useGetGenreQuery } from '../queries/queries';
import { GenreType } from '@/types/types';


const GenreDropdown = () => {

  const {genreData, isLoading} = useGetGenreQuery()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-poppins text-lg'>Genres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {genreData?.genre?.map((genre: GenreType) => (
                <ListItem
                  key={genre.title}
                  title={genre.title}
                  href={genre.href}
                >
                  {genre.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default GenreDropdown