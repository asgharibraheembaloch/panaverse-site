import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Header } from './components/header'
import {Describe} from './components/description'
import { Social } from './components/footer'
import HeroSection from './components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Describe />
      <Social />
    </main>
  )
}
