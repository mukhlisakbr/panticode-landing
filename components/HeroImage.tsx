import React from 'react'
import Hero from './../public/hero.png'
import Image from 'next/image'

export function HeroImage() {
  return <Image src={Hero} alt="Hero" width={500} objectFit="contain"></Image>
}
