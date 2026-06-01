import React from 'react'
import CustomButton from './customComponent/StatsCards'
import StatsCards from './customComponent/StatsCards'
import DescriptionCard from './customComponent/DescriptionCard'

const WhyChoose = () => {
  return (
    <div id='features' className='border-b border-gray-200'>

      <div className='max-w-7xl my-20 mx-auto'>
        <div className="flex flex-col md:flex-row md:gap-5">
          <DescriptionCard />
          <StatsCards />
        </div>
      </div>
    </div>
  )
}

export default WhyChoose