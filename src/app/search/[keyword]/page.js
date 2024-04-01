import { getAnime } from "@/app/services/api-lib"
import SearchAnime from "@/components/SearchAnime"
import React from "react"

const Page = async ({ params }) => {
  // server component
  const { keyword } = params
  const decodekeyword = decodeURI(keyword)
  const searchAnime = await getAnime("anime", `q=${decodekeyword}`)
  // cara menggunakan datanya yaitu  "recommendAnime.data"
  return (
    <>
      <section>
        <h1>{decodekeyword}</h1>
        <SearchAnime api={searchAnime} />
      </section>
    </>
  )
}

export default Page

// const keyword = decodeURIComponent(params.keyword)  mengubah kode %20 menjadi spasi biasa menggunakan decodeUrIComponent
