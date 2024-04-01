"use client" //client component

import HeaderAnime from "@/components/AnimesList/HeaderAnime"
import PopulerAnime from "@/components/AnimesList/PopulerAnime"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import React, { useEffect, useState } from "react"
import { getAnime } from "../../services/api-lib" //api service for getting anime

const Page = () => {
  const [page, setPage] = useState(1)
  const [populerAnime, setpopulerAnime] = useState([])

  // fetch data using useState and useEffect bcs this is a component
  const fetchDatapopuler = async () => {
    // fetch data using api reuseable api from service local api
    const populerAnime = await getAnime("top/anime", `page=${page}`)
    setpopulerAnime(populerAnime)
  }

  useEffect(() => {
    fetchDatapopuler()
  }, [page])

  return (
    <>
      <section>
        <HeaderAnime />
        <HeaderMenu />
        <PopulerAnime api={populerAnime} />
        <Pagination page={page} lastPage={populerAnime.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </>
  )
}

export default Page
