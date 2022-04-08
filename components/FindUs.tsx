import React from 'react'
import GooglePlayIcon from './../public/google-play-icon.png'
import Image from 'next/image'

export function FindUs() {
  return (
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
  )
}
