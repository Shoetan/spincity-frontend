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







// create and endpoint or admin where you can add  genres in the future for now just use mock data

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Afro beats",
    href: "",
    description:
      "Rythms from the africa continent",
  },
  {
    title: "Hip Hop",
    href: "",
    description:
      "Locked in Fourth quarter all in.",
  },
  {
    title: "Pop",
    href: "",
    description:
      "Just for when you feel nostalgia",
  },
  {
    title: "R&B",
    href: "",
    description: "Dinner with that special someone.",
  },
  {
    title: "Jazz",
    href: "",
    description:
      "Mood booster and Excitment.",
  },
  {
    title: "Rock",
    href: "",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Soul",
    href: "",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const GenreDropdown = () => {

  const {genreData, isLoading} = useGetGenreQuery()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-roboto text-lg'>Genres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {genreData?.genre?.map((genre: any) => (
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