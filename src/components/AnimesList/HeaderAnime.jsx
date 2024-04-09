import React from "react"
import Link from "next/link"

const HeaderAnime = ({ title, linkhref, linktitle, icon }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h1 className="text-2xl font-bold flex items-center gap-3">
        {icon} {title}
      </h1>
      {linkhref && linktitle ? (
        <Link href={linkhref} className="underline hover:bg-indigo-500 transition-all">
          {linktitle}
        </Link>
      ) : null}
    </div>
  )
}

export default HeaderAnime
