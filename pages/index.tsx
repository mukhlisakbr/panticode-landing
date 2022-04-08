import { TechLogo } from './../components/TechLogo'
import { HeroImage } from '../components/HeroImage'
import { FindUs } from './../components/FindUs'
import { HeaderLogo } from './../components/HeaderLogo'
import type { NextPage } from 'next'

import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Panti Code"
        description="We make cool & fast apps. Committed to helping people with useful free apps."
      />
      <div className="min-h-screen bg-black">
        <div className="mx-auto max-w-6xl px-8 py-12">
          <nav className="flex items-center justify-between">
            <div className="relative flex h-14 w-44 justify-start md:h-20 md:w-64">
              <HeaderLogo />
            </div>
            <div className="">
              <FindUs />
            </div>
          </nav>
          <main className="mt-20 flex items-center">
            <div className="flex-col text-gray-50 sm:w-full md:w-7/12">
              <div className="w-44 justify-end md:hidden">
                <HeroImage />
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
                  <TechLogo />
                </div>
              </div>
            </div>
            <div className="hidden w-5/12 justify-end md:flex">
              <HeroImage />
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
