'use client'

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


type Props = {
  user: Session['user']
}

export function UserInfo({ user }: Props) {
  if (!user) return

  return (
    <header className="flex items-center px-6 py-3 border-b gap-4 lg:px-8 lg:py-4 bg-orange-500">
      <Link
        className="flex items-center space-x-2 text-sm font-medium tracking-widest text-gray-50 hover:underline dark:text-gray-950"
        href="/"
      >
        <SewingPinFilledIcon className="w-5 h-5" />
        <span>Sprint3d</span>
      </Link>
      {/* <div className="flex gap-x-8 ml-auto">

        <div className="">
          <nav className="flex space-x-4">
            <Button variant='outline' className="text-sm font-medium" onClick={() => signOut()}>
              Sign Out
            </Button>
          </nav>
        </div>
      </div> */}
      <div className="flex gap-x-8 ml-auto">
        {/* <Menubar  >
          <MenubarMenu>
            <MenubarTrigger>
              {user?.email}
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="w-2" >
                <Button variant='secondary' onClick={() => signOut()}>
                  Sign Out
                </Button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar> */}

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="border-none">
                  {user?.email}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Button variant='ghost' onClick={() => signOut()}>
                    Sign Out
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
