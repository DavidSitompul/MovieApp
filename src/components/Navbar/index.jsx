import React from "react"
import Link from "next/link"

const NavigaitonBar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between p-4 px-5 mb-10">
        <Link href="/" className="font-bold text-2xl text-white">
          ANIME LK 23
        </Link>
        <input type="text" placeholder="Cari Anime..." alt="..." className="px-4 h-10 outline-none rounded-md" />
        <h1>Genre</h1>
        <h1>Populer</h1>
        <h1>Tahun</h1>
      </div>
    </header>
  )
}

export default NavigaitonBar
