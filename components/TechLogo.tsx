import React from 'react'
import ReactNativeLogo from './../public/react-native.png'
import ExpoLogo from './../public/expo.png'
import Image from 'next/image'

export function TechLogo() {
  return (
    <>
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
    </>
  )
}
