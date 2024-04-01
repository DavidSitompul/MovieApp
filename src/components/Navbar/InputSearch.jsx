"use client"

import { useRouter } from "next/navigation"
import React, { useRef } from "react"
import { CiSearch } from "react-icons/ci"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (e) => {
    const keyword = searchRef.current.value
    if (!keyword || keyword.trim() == "") return
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative">
      <input type="text" placeholder="Cari Anime..." alt="..." className="w-full px-4 h-10 outline-none rounded-md" ref={searchRef} onKeyDown={handleSearch} />

      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <CiSearch size={24} />
      </button>
    </div>
  )
}

export default InputSearch
