import AnimesList from "@/components/AnimesList"
import { data } from "autoprefixer"
import React from "react"

const Home = async () => {
  // server component
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime`)
  const animes = await response.json()
  // console.log(animes.pagination) pagination untuk membagi smua data rekomendasi??
  // cara menggunakan datanya yaitu  "animes.data"
  return (
    <div>
      <div key={data.mal_id} className="grid  px-3 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:grid-cols-5">
        {animes.data.map((data) => {
          const [datas] = data.entry //destructering data array
          console.log(data.content)
          return (
            <div key={datas.mal_id}>
              <AnimesList title={datas.title} img={datas.images.webp.image_url} id={datas.mal_id} content={data.content} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
