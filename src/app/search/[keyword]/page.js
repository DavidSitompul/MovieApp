import { getAnime } from "@/services/api-lib"
import SearchAnime from "@/components/SearchAnime"
import React from "react"
import HeaderAnime from "@/components/AnimesList/HeaderAnime"

const Page = async ({ params }) => {
  // server component
  const { keyword } = params
  const decodekeyword = decodeURI(keyword)
  const searchAnime = await getAnime("anime", `q=${decodekeyword}`)
  // cara menggunakan datanya yaitu  "recommendAnime.data"
  return (
    <>
      <section>
        <HeaderAnime title={`Search Result For ${decodekeyword.toUpperCase()} `} />
        <SearchAnime api={searchAnime} />
      </section>
    </>
  )
}

export default Page

// const keyword = decodeURIComponent(params.keyword)  mengubah kode %20 menjadi spasi biasa menggunakan decodeUrIComponent
