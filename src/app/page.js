import HeaderAnime from "@/components/AnimesList/HeaderAnime"
import ListRecommend from "@/components/AnimesList/Recommend"
import React from "react"

const Home = async () => {
  // server component
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime`)
  const recommendAnime = await response.json()
  // console.log(animes.pagination) pagination untuk membagi smua data rekomendasi??
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
