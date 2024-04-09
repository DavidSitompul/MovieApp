import DetailsAnime from "@/components/AnimesList/DetailsAnime"
import { getAnime } from "@/services/api-lib"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import React from "react"

const Page = async ({ params: { id } }) => {
  const detailsAnime = await getAnime(`anime/${id}`)
  const character = await getAnime(`anime/${id}/characters`)

  return (
    <>
      <HeaderMenu title={`Detail for - ${detailsAnime.data.title}`} />
      <DetailsAnime detailsAnime={detailsAnime} character={character} />
    </>
  )
}

export default Page
