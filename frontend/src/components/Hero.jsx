import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import dashboardHero from '@/assets/dashboard2.png'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <div className='flex items-center justify-between'>
        <div className="left w-1/2 pr-5">
          <div className="note-button">
            <Button variant="outline" size='lg' className={"rounded-full custom-btn2 text-green-700 border-green-700"}>
              🚀 Trusted by 500+ Companies
            </Button>
          </div>
          <div className="main-tagline py-5">
            <p className='text-6xl font-bold text-logo-black opacity-95 leading-16'>Transform Your <br /><span className='text-logo-blue'>Workforce</span> <br />Management</p>
          </div>
          <div className="description">
            <p className='text-xl text-gray-600'>
              Streamline recruitment, manage staff efficiently, and track <br /> performance with intelligent solutions designed for growing <br /> businesses.
            </p>
          </div>
          <div className='pt-10 flex items-center justify-center w-4/5  gap-5'>
            <div className="mail-input w-full flex items-center justify-start ">
              <Input type="text" placeholder='Enter Your Email' className='py-5 px-2 w-full ouline'/>
            </div>
            <div className="join-waitlist-button">
              <Button variant='outline' className={"bg-logo-blue text-white py-5"}>Join Waitlist</Button>
            </div>
          </div>
        </div>
        <div className="right w-1/2 pl-3">
          <div variant='outline' className='w-full h-full  '>            
            <img src={dashboardHero}  className='rounded-lg' alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero