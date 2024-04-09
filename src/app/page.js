import React from "react"
import HeaderAnime from "@/components/AnimesList/HeaderAnime"
import Link from "next/link"
import { Card, CardBody, Stack, Heading, Image } from "@chakra-ui/react"
import ListRecommend from "@/components/AnimesList/Recommend"
import CardCarousel from "@/components/carousel"
import { getAnime } from "@/services/api-lib" //api reuseable
import { FcLike, FcStart } from "react-icons/fc"
import { FaHotjar } from "react-icons/fa"
import HotAnime from "@/components/AnimesList/HotAnime"

const Home = async () => {
  // server component
  const recommendAnime = await getAnime("recommendations/anime")
  const populerAnime = await getAnime("top/anime", `limit=8`)
  const Sensational = await getAnime("seasons/now", `limit=15`)

  // cara menggunakan datanya yaitu  "recommendAnime.data"
  return (
    <>
      <CardCarousel />
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-[75%]">
          <section>
            <HeaderAnime title="Most Populer" linkhref="/populer" linktitle="See All" icon={<FcStart />} />
            <div className="grid px-5 xl:pl-8 2xl:pl-14 gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {populerAnime.data?.map((data) => {
                return (
                  <Link href={`/anime/${data.mal_id}`} className="" key={data.mal_id}>
                    <Card boxShadow="2xl" className="h-[320px] w-[300] md:w-[180px]">
                      <CardBody>
                        <Image src={data.images.webp.image_url} alt="..." borderRadius="sm" className="h-[200px] w-full hover:scale-[102%] ease-in-out transition-all duration-300" />
                        <Stack mt="3">
                          <Heading size="md" noOfLines={3}>
                            {data.title}
                          </Heading>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>
          <section className="mt-10">
            <HeaderAnime title="Recommended" icon={<FcLike />} />
            <ListRecommend api={recommendAnime} />
          </section>
        </div>
        <div className="h-full md:w-[25%]">
          <section className="mt-5 md:mt-0 pr-5">
            <HeaderAnime title="Sensational Anime" icon={<FaHotjar color="orange" />} />
            <HotAnime api={Sensational} />
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
