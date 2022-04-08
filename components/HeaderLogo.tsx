import React from 'react'
import Logo from './../public/logo.png'
import Image from 'next/image'

export function HeaderLogo() {
  return (
    <a href="#">
      <Image src={Logo} alt="Logo" objectFit="contain" layout="fill"></Image>
    </a>
  )
}
