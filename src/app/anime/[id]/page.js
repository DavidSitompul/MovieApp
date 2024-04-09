import DetailsAnime from "@/components/AnimesList/DetailsAnime"
import { getAnime } from "@/services/api-lib"
import React from "react"

const Page = async ({ params: { id } }) => {
  const detailsAnime = await getAnime(`anime/${id}`)
  const character = await getAnime(`anime/${id}/characters`)

  return (
    <>
      <h1>Detail for - {detailsAnime.data.title}</h1>
      <DetailsAnime detailsAnime={detailsAnime} character={character} />
    </>
  )
}

export default Page
