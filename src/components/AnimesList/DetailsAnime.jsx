"use client"

import React from "react"
import { Box, Card, CardBody, CardFooter, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react"
import { FaClock, FaList, FaStar } from "react-icons/fa6"
import { PiTelevisionFill } from "react-icons/pi"
import VideoPlayer from "../Utilities/videoPlayer"

const DetailsAnime = ({ detailsAnime, character }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <section>
        <Card direction={{ base: "column", md: "row" }} overflow="hidden" boxShadow="xl" m={5} mb={10} bg={colorMode === "light" ? "#EDF2F7" : ""}>
          <Image objectFit="cover" w={{ base: "100%", md: "35%" }} src={detailsAnime.data.images.webp.image_url} alt="..." />
          <Stack w={{ base: "100%", md: "65%" }} ml="auto">
            <CardBody>
              <Heading size="md">
                {detailsAnime.data.title}
                <Text py="2">Year - {detailsAnime.data.year <= null ? "Sorry Not released !!" : detailsAnime.data.year}</Text>
              </Heading>
              <Text py="2" className="text-justify indent-5">
                {detailsAnime.data.synopsis}
              </Text>
              <Box gap={5} display={{ base: "column", md: "flex" }}>
                <Text py="2" className="flex gap-x-2 items-center">
                  <FaStar className="text-yellow-500" size={14} /> {detailsAnime.data.score}
                </Text>
                <Text py="2" className="flex gap-x-2 items-center">
                  <FaClock className="text-yellow-500" size={13} />
                  {detailsAnime.data.duration}
                </Text>
                <Text py="2" className="flex gap-x-2 items-center">
                  <FaList className="text-yellow-500" size={14} /> {detailsAnime.data.episodes} eps
                </Text>
                <Text py="2" className="flex gap-x-2 items-center">
                  <PiTelevisionFill className="text-yellow-500" size={17} />
                  {detailsAnime.data.type}
                </Text>
              </Box>
            </CardBody>
            <CardFooter>
              <VideoPlayer youtubeId={detailsAnime.data.trailer.youtube_id} />
            </CardFooter>
          </Stack>
        </Card>
      </section>
      <section>
        <Box m={5} rounded="lg" boxShadow="xl" bg={colorMode === "light" ? "#EDF2F7" : ""}>
          {character.data.map((a) => {
            if (a.role === "Main") {
              const [voice] = a.voice_actors
              return (
                <div className="sm:flex py-5 px-3 space-y-6 sm:space-y-0 gap-6" key={a.character.mal_id}>
                  <div className="sm:w-[35%] flex gap-2 ">
                    <div className="h-20 w-20">
                      <Image objectFit="cover" rounded={5} boxSize="100%" src={a.character.images.webp.image_url} alt="..." />
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">{a.character.name}</h1>
                      <h2>{a.role}</h2>
                    </div>
                  </div>

                  <div className="sm:w-[35%] flex gap-2">
                    <div className="h-20 w-20">
                      <Image objectFit="cover" rounded={5} p-1 boxSize="100%" src={voice.person.images.jpg.image_url} alt="..." />
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">{voice.person.name}</h1>
                    </div>
                  </div>
                </div>
              )
            } else {
              return null // Jika tidak ingin merender karakter yang bukan Main
            }
          })}
        </Box>
      </section>
    </>
  )
}

export default DetailsAnime
