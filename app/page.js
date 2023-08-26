"use client"

import Navbar from './components/Navbar'
import HomeHead from './components/HomeHead'
import Search from './components/Search'
import Services from './components/Services'
import Wave from './components/Wave'

import { useState } from 'react'
import Modal from './components/Modal'
import Image from 'next/image'

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navbar setOpenModal={setOpenModal} />
      <Modal title={'Login'} openModal={openModal} setOpenModal={setOpenModal} />
      <HomeHead />
      <Search />
      <Services />
      {/* <Wave/> */}
    </div>
  )
}
