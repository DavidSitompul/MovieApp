import HeaderAnime from "@/components/AnimesList/HeaderAnime"
import ListRecommend from "@/components/AnimesList/Recommend"
import { getAnime } from "@/app/services/api-lib" //api reuseable
import React from "react"

const Home = async () => {
  // server component
  const recommendAnime = await getAnime("recommendations/anime")
  // cara menggunakan datanya yaitu  "recommendAnime.data"
  return (
    <>
      <section>
        <HeaderAnime />
        <ListRecommend api={recommendAnime} />
      </section>
    </>
  )
}

export default Home
