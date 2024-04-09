import HeaderAnime from "@/components/AnimesList/HeaderAnime"
import PopulerAnime from "@/components/AnimesList/PopulerAnime"
import ListRecommend from "@/components/AnimesList/Recommend"
import CardCarousel from "@/components/carousel"
import { getAnime } from "@/services/api-lib" //api reuseable
import React from "react"

const Home = async () => {
  // server component
  const recommendAnime = await getAnime("recommendations/anime")
  const populerAnime = await getAnime("top/anime", `limit=12`)

  // cara menggunakan datanya yaitu  "recommendAnime.data"
  return (
    <>
      <section>
        {/* <HeaderAnime /> */}
        <CardCarousel />
        <PopulerAnime api={populerAnime} />
        <ListRecommend api={recommendAnime} />
      </section>
    </>
  )
}

export default Home
