import type { NextPage } from 'next'
import Image from 'next/image'
import Logo from './../public/logo.png'
import GooglePlayIcon from './../public/google-play-icon.png'
import Hero from './../public/hero.png'
import ReactNativeLogo from './../public/react-native.png'
import ExpoLogo from './../public/expo.png'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Panti Code"
        description="We make cool & fast apps. Committed to helping people with useful free apps."
      />
      <div className="min-h-screen bg-black">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <nav className="flex items-center justify-between">
            <div className="relative flex h-14 w-44 justify-start md:h-20 md:w-64">
              <a href="#">
                <Image
                  src={Logo}
                  alt="Logo"
                  objectFit="contain"
                  layout="fill"
                ></Image>
              </a>
            </div>
            <div className="">
              <a
                href="https://play.google.com/store/apps/dev?id=6540392924092933918"
                target={'_blank'}
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 px-4 py-2 text-base font-bold tracking-tight text-gray-50 md:py-3 md:px-8 md:text-2xl">
                  <span className="relative h-4 w-4 md:h-8 md:w-8">
                    <Image
                      src={GooglePlayIcon}
                      alt="Icon"
                      objectFit="contain"
                      layout="fill"
                    ></Image>
                  </span>
                  <span>find us.</span>
                </button>
              </a>
            </div>
          </nav>
          <main className="mt-20 flex items-center md:mt-28">
            <div className="flex-col text-gray-50 sm:w-full md:w-6/12">
              <div className="w-44 justify-end md:hidden">
                <Image
                  src={Hero}
                  alt="Hero"
                  width={500}
                  objectFit="contain"
                ></Image>
              </div>
              <div className="font-heading text-4xl font-bold md:text-7xl">
                <h1>We make</h1>
                <h1 className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  cool & fast apps.
                </h1>
              </div>
              <div className="mt-4 text-sm md:mt-8 md:text-xl ">
                Committed to helping people with useful free apps.
              </div>
              <div>
                <div className="mt-10 text-xs font-bold tracking-tight text-gray-400 md:mt-20 md:text-base">
                  POWERED BY THE LATEST TECHNOLOGY IN THE INDUSTRY
                </div>
                <div className=" mt-4 flex gap-2 ">
                  <a
                    href="https://reactnative.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                    className="relative h-10 w-10  md:h-16 md:w-16"
                  >
                    <Image
                      src={ReactNativeLogo}
                      alt="React Native"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </a>
                  <a
                    href="https://expo.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                    className="relative h-10 w-10  md:h-16 md:w-16"
                  >
                    <Image
                      src={ExpoLogo}
                      alt="Expo"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden w-6/12 justify-end md:flex">
              <Image
                src={Hero}
                alt="Hero"
                width={500}
                objectFit="contain"
              ></Image>
            </div>
          </main>
          <footer className="mt-12 flex justify-end gap-2 text-xs tracking-widest  text-gray-400 md:text-base">
            <a
              href="https://id.wikipedia.org/wiki/Daerah_Istimewa_Yogyakarta"
              target={'_blank'}
              rel="noreferrer"
            >
              Made with ☕️ from JOG
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
