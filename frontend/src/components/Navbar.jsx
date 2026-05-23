import React, { useState } from 'react'
import { Users, SunIcon, MoonIcon, MenuIcon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className='shadow-sm bg-transparent '>
      <div className='lg:max-w-7xl md:max-w-4xl mx-auto sm:flex hidden items-center justify-between h-8 py-8 '>
        <div className="logo flex items-center justify-start gap-2">
          <div className="logo-icon bg-[#7377c6] p-2 rounded-lg">
            <Users color='white' />
          </div>
          <p className="logo-name font-bold text-xl text-logo-black cursor-pointer">PeoplePilot</p>
        </div>
        <div className="navlink ">
          <ul className='flex items-center justify-center gap-8'>
            <li className='text-md text-gray-500 hover:text-black cursor-pointer'>Features</li>
            <li className='text-md text-gray-500 hover:text-black cursor-pointer'>Benefits</li>
            <li className='text-md text-gray-500 hover:text-black cursor-pointer'>Contacts</li>
          </ul>
        </div>
        <div className="signinandgetstarted flex items-center justify-center gap-4">
          <div className="dark-mode cursor-pointer">
            <Button variant={"outline"}><SunIcon /></Button>
          </div>
          <div className="signIn cursor-pointer">
            <Button variant='outline'>SignIn</Button>
          </div>
          <div className="getStarted">
            <Button variant='outline' className={'custom-btn cursor-pointer'}>Get Started</Button>
          </div>
        </div>
      </div>

      {/* For small devices only */}
      <div className='sm:hidden py-2 px-4 w-full'>
        <div className=''>
          <div className='flex items-center justify-between'>
            <div className="logo flex items-center justify-start gap-2">
              <div className="logo-icon bg-[#7377c6] p-2 rounded-lg">
                <Users color='white' />
              </div>
              <p className="logo-name font-bold text-xl text-logo-black cursor-pointer">PeoplePilot</p>
            </div>
            <div className='menu'>
              {menuActive ? <X  onClick={() => setMenuActive(false)} /> : <Menu onClick={() => setMenuActive(true)} />}
            </div>
          </div>

          {menuActive && <div className='absolute top-20 w-full left-0 px-2'>
            <div className="navlink pb-3 ">
              <ul className='flex flex-col items-start justify-center gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)] pb-4'>
                <li className='text-md text-gray-500 hover:text-black cursor-pointer'>Features</li>
                <li className='text-md text-gray-500 hover:text-black cursor-pointer'>Benefits</li>
                <li className='text-md text-gray-500 hover:text-black cursor-pointer'>Contacts</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3'>

              <div className="dark-mode cursor-pointer w-full">
                <Button variant={"outline"} className={'w-full h-10'}><SunIcon size={46} /></Button>
              </div>
              <div className="signIn cursor-pointer">
                <Button variant='outline' className={"w-full h-10"}>SignIn</Button>
              </div>
              <div className="getStarted cursor-pointer w-full">
                <Button variant='outline' className={'custom-btn  w-full h-10'}>Get Started</Button>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar