import React from 'react'
import { Clock, Compass, History, Home, PlaySquare, ThumbsUp, User } from "lucide-react"
import { Button } from './button'
import Link from 'next/link'

const Sidebar = () => {
  const user = {
    id: "1",
    name: "jhon Doe",
    email: "john@example.com",
    image: "https://github.com/shadcn.png?height=32&width=32",
  }

  return (
    <aside className='w-64  bg-white border-r min-h-screen p-2'>
      <nav className='space-y-2'>
        <Link href="/">
          <Button variant="ghost" className='w-full justify-start'>
            <Home style={{ width: 24, height: 24 }}className='mr-3 ' />
            Home
          </Button>
        </Link>
        <Link href="/explore">
          <Button variant="ghost" className='w-full justify-start'>
            <Compass style={{ width: 24, height: 24 }} className='w-6 h-6 mr-3' />
            Explore
          </Button>
        </Link>
        <Link href="/subscriptions">
          <Button variant="ghost" className='w-full justify-start'>
            <PlaySquare style={{ width: 24, height: 24 }} className='w-6 h-6 mr-3' />
            Subcriptions
          </Button>
        </Link>

        {user && (
          <div className="pt-2 border-t-2 mt-3">
            <Link href="/history">
              <Button variant="ghost" className='w-full justify-start'>
                <History style={{ width: 24, height: 24 }} className='w-6 h-6 mr-3' />
                History
              </Button>
            </Link>
            <Link href="/liked">
              <Button variant="ghost" className='w-full justify-start'>
                <ThumbsUp style={{ width: 24, height: 24 }} className='w-6 h-6 mr-3' />
                Liked Videos
              </Button>
            </Link>
            <Link href="/watch-later">
              <Button variant="ghost" className=' w-full justify-start'>
                <Clock style={{ width: 24, height: 24 }} className='mr-3' />
                Watch Later
              </Button>
            </Link>
            <Link href="/yourChannel">
              <Button variant="ghost"  className='w-full justify-start '>
                <User style={{ width: 24, height: 24 }}  className='mr-3'/>
                Your Channel
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
