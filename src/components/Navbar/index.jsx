"use client"
import React from "react"
import Link from "next/link"
import InputSearch from "./InputSearch"

import { useColorMode, Button } from "@chakra-ui/react"

const NavigaitonBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <nav className="bg-black text-white">
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between p-4 px-5">
        <Link href="/" className="font-bold text-2xl text-white">
          ANIME LK 23
        </Link>
        <InputSearch />
        <h1>Genre</h1>
        <Link href="/populer">Populer</Link>
        <h1>Tahun</h1>
        <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}n>
      </div>
    </nav>
  )
}

export default NavigaitonBar
