import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Header } from './components/header'
import CaptionCarousel from './components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <CaptionCarousel />
    </main>
  )
}
