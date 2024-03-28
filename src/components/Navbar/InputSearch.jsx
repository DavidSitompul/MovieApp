"use client"

import { useRouter } from "next/navigation"
import React, { useRef } from "react"
import { CiSearch } from "react-icons/ci"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const keyword = searchRef.current.value
      router.push(`/search/${keyword}`)
    }
  }
  return (
    <div className="relative">
      <input type="text" placeholder="Cari Anime..." alt="..." className="w-full px-4 h-10 outline-none rounded-md" ref={searchRef} onKeyDown={handleKeyDown} />

      <button onClick={handleSearch}>
        <CiSearch size={24} className="absolute top-2 end-2" />
      </button>
    </div>
  )
}

export default InputSearch
