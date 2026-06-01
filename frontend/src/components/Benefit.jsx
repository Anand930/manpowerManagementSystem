import { Users } from 'lucide-react'
import React from 'react'
import FeatureCard from './customComponent/FeatureCard'

const Benefit = () => {
  return (
    <div id='benefits' className='border-b border-gray-200'>
      <div className="py-20 max-w-7xl mx-auto">
        <div className="top-section flex flex-col items-center justify-center">
          <div className="heading ">
            <p className='text-feature-custom1 text-4xl font-bold'>Powerful Features</p>
          </div>
          <div className="description py-4">
            <p className='text-gray-500 text-lg'>Everything you need to manage your workforce effectively in one unified platform</p>
          </div>
        </div>
        <div className="card-section py-4 ">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10  '>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Benefit