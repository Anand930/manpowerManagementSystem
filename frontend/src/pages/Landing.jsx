import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefit from '@/components/Benefit'
import WhyChoose from '@/components/WhyChoose'
import ReadyToTransform from '@/components/ReadyToTransform'
import Footer from '@/components/Footer'

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefit/>
        <WhyChoose/>
        <ReadyToTransform/>
        <Footer/>
    </div>
  )
}

export default Landing