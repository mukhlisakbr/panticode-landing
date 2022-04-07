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
        <div className="mx-auto max-w-7xl px-4 py-12">
          <nav className="flex items-center justify-between">
            <div className="">
              <a href="#">
                <Image src={Logo} alt="Logo"></Image>
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store/apps/dev?id=6540392924092933918"
                target={'_blank'}
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 py-3 px-8 text-2xl font-bold tracking-tight text-gray-50">
                  <Image src={GooglePlayIcon} alt="Icon"></Image>find us.
                </button>
              </a>
            </div>
          </nav>
          <main className="mt-28 flex items-center">
            <div className="w-6/12 flex-col text-gray-50">
              <div className="font-heading text-7xl font-bold">
                <h1>We make</h1>
                <h1 className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  cool & fast apps.
                </h1>
              </div>
              <div className="mt-8 text-xl ">
                Committed to helping people with useful free apps.
              </div>
              <div>
                <div className="mt-20 font-bold tracking-tight text-gray-600">
                  POWERED BY THE LATEST TECHNOLOGY IN THE INDUSTRY
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://reactnative.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Image src={ReactNativeLogo} alt="React Native"></Image>
                  </a>
                  <a
                    href="https://expo.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Image src={ExpoLogo} alt="Expo"></Image>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-6/12 justify-end ">
              <Image
                src={Hero}
                alt="Hero"
                width={500}
                objectFit="contain"
              ></Image>
            </div>
          </main>
          <footer className="mt-12 flex justify-end gap-2  tracking-widest text-gray-600">
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
