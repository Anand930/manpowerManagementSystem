import React from 'react'
import { Users } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full dark:bg-[#0B0B14] dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-logo-blue p-2">
                <Users size={22} className='text-white dark:text-black'/>
              </div>

              <h1 className="text-3xl font-bold">
                WorkFlow
              </h1>
            </div>

            <p className="mt-6 max-w-xs text-lg leading-9 text-gray-400 ">
              Intelligent workforce management for growing businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h2 className="text-2xl font-semibold">
              Product
            </h2>

            <ul className="mt-6 space-y-4 text-lg text-gray-400">
              <li className="cursor-pointer dark:hover:text-white">
                Features
              </li>

              <li className="cursor-pointer dark:hover:text-white dark:hover:text-white hover:text-black">
                Pricing
              </li>

              <li className="cursor-pointer dark:hover:text-white dark:hover:text-white hover:text-black">
                Security
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-2xl font-semibold">
              Company
            </h2>

            <ul className="mt-6 space-y-4 text-lg text-gray-400">
              <li className="cursor-pointer dark:hover:text-white hover:text-black">
                About
              </li>

              <li className="cursor-pointer dark:hover:text-white hover:text-black">
                Blog
              </li>

              <li className="cursor-pointer dark:hover:text-white hover:text-black">
                Careers
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-2xl font-semibold">
              Legal
            </h2>

            <ul className="mt-6 space-y-4 text-lg text-gray-400">
              <li className="cursor-pointer dark:hover:text-white hover:text-black">
                Privacy
              </li>

              <li className="cursor-pointer dark:hover:text-white hover:text-black">
                Terms
              </li>

              <li className="cursor-pointer dark:hover:text-white hover:text-black">
                Contact
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-lg text-gray-400">
            © 2026 WorkFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-lg text-gray-400">
            <p className="cursor-pointer dark:hover:text-white hover:text-black">
              Twitter
            </p>

            <p className="cursor-pointer dark:hover:text-white hover:text-black">
              LinkedIn
            </p>

            <p className="cursor-pointer dark:hover:text-white">
              GitHub
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer