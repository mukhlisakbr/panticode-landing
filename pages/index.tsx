import type { NextPage } from 'next'
import Image from 'next/image'
import Logo from './../public/logo.webp'
import GooglePlayIcon from './../public/google-play-icon.png'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl border">
        <nav className="flex items-center justify-between">
          <div className="px-4 py-12">
            <a href="#">
              <Image src={Logo} alt="Logo"></Image>
            </a>
          </div>
          <div>
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 py-4 px-8 text-3xl font-bold tracking-tight text-gray-50">
              <Image src={GooglePlayIcon} alt="Icon"></Image>find us.
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Home
