"use client"
import React from "react"
import Link from "next/link"
import InputSearch from "./InputSearch"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode, Button } from "@chakra-ui/react"

const NavigaitonBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <nav className={` ${colorMode === "light" ? "text-black bg-[#CBD5E0]" : "text-white bg-[#2D3748]"}`}>
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between p-4 px-5 items-center">
        <Link href="/" className="font-bold text-2xl">
          VIDSANIME 17
        </Link>
        <div className="flex gap-x-3">
          <InputSearch />
          <Button onClick={toggleColorMode}> {colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
        </div>
      </div>
    </nav>
  )
}

export default NavigaitonBar
