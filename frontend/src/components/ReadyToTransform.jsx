import React from 'react'
import { Button } from '@/components/ui/button'

const ReadyToTransform = () => {
  return (
    <section className="w-full">
      <div id='#contact'
        className="
          bg-gradient-to-r
          from-[#4F46E5]
          via-[#00897B]
          to-[#F97316]
          px-6
          py-24
          text-center
        "
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Transform Your Workforce?
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-10 text-white/90">
          Join hundreds of growing companies that are streamlining
          their workforce management with WorkFlow
        </p>

        {/* Input + Button */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <input
            type="email"
            placeholder="your@email.com"
            className="
              h-16
              w-full
              max-w-xl
              rounded-2xl
              border
              border-white/30
              bg-white/20
              px-6
              text-lg
              text-white
              placeholder:text-white/60
              outline-none
              backdrop-blur-md
            "
          />

          <Button
            className="
              h-16
              rounded-2xl
              bg-white
              px-10
              text-lg
              font-semibold
              text-indigo-700
              hover:bg-white/90
            "
          >
            Get Early Access
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-white/80">
          We'll be in touch within 24 hours with exclusive early-access benefits.
        </p>
      </div>
    </section>
  )
}

export default ReadyToTransform