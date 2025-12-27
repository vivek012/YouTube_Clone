"use client"
import { Menu, Youtube, Search, Mic, VideoIcon, Bell, User } from "lucide-react"

import { Button } from './button'
import Link from "next/link"
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

const Header = () => {
    const user = {
        id: "1",
        name: "jhon Doe",
        email: "john@example.com",
        image: "https://github.com/shadcn.png?height=32&width=32",
    }

    const [searchQuery, setSearchQuery] = useState("")
    return (
        <header className="flex justify-between items-center px-4 py-2  bg-white border-b">
            <div className="flex  items-center gap-4">
                <Button variant="ghost" className="">
                    <Menu style={{ width: 24, height: 24 }} className="w-6 h-6" />
                </Button>
                <Link className="flex items-center gap-2" href="/">
                    <div className=" flex items-center justify-center bg-red-600 rounded p-1 ">
                        <Youtube className="w-6 h-6 rounded-sm text-white bg-red-600" />
                    </div>
                    <span className="text-xl font-medium ">Youtube</span>
                    <span className=" text-xs text-gray-400 ml-1">IN</span>
                </Link>
            </div>
            <form className="flex  items-center gap-2 max-w-2xl mx-4  flex-1 " >
                <div className="flex ">
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-l-full text- pl-8 outline focus-visible:ring"
                    />
                    <Button type="submit"
                        className="rounded-r-full p-6 bg-gray-500 hover:bg-gray-600 text-white`  border border-1-0"
                    ><Search style={{ width: 24, height: 24 }} className="" /></Button>
                </div>
                <Button variant="ghost" className="roounded-full">
                    <Mic style={{ width: 24, height: 24 }} className="" />
                </Button>
            </form>
            <div className="flex items-center gap-2">
                {user ? (
                    <>
                        <Button variant="ghost" size="icon" >
                            <VideoIcon style={{ width: 24, height: 24 }}  />
                        </Button>
                        <Button variant="ghost" className="">
                            <Bell style={{ width: 24, height: 24 }} className="" />
                        </Button>
                        <DropdownMenu  >
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage className="" src={user.image || ""} alt={user.name || ""} />
                                        <AvatarFallback>
                                            {user.name?.[0] || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuItem>
                                    <Link href={`/channel/${user.id}`}> Your Channel</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={`/channel/${user.id}`}> Your Channel</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={`/channel/${user.id}`}> Your Channel</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>

                        </DropdownMenu>
                    </>
                ) : (
                    <>
                        <Button className="flex items-center gap-2">
                            <User  className="w-4 h-4" />
                            Sign Up
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header
