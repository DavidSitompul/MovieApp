import SearchAnime from "@/components/SearchAnime"
import React from "react"

const Page = async ({ params }) => {
  // server component
  const { keyword } = params
  const decodekeyword = decodeURI(keyword)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodekeyword}`)
  const searchAnime = await response.json()
  // console.log(animes.pagination) pagination untuk membagi smua data rekomendasi??
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
