import NavbarForLoggedIn from '@/components/customComponent/NavbarForLoggedIn'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Dashboard from '@/components/Dashboard'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <NavbarForLoggedIn/>
      <Dashboard/>
    </div>
  )
}

export default Home