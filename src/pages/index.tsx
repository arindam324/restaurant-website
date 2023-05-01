import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Main from '@/components/Main'
import DecorativePlants from '@/components/DecorativePlants'
import WhatWeServe from '@/components/WhatWeServe'
import OurGallery from '@/components/OurGallery'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'
import DecoratesPlants from '@/components/DecoratePlants'
import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'
import VideoPlayer from '@/components/VideoPlayer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isVideoDone, setIsVideoDone] = useState(false);

  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center   pt-10 ${inter.className}`}
    >
      <Header />
      <Main />
      <DecorativePlants />
      <WhatWeServe />
      <DecoratesPlants />
      <OurGallery />
      <NewsLetter />
      <Footer />
    </main>
  )
}
