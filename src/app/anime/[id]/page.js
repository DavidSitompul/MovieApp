import { getAnime } from "@/services/api-lib"
import VideoPlayer from "@/components/Utilities/videoPlayer"
import { Box, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { PiTelevisionFill } from "react-icons/pi"
import React from "react"
import { FaClock, FaList, FaStar } from "react-icons/fa6"

const Page = async ({ params: { id } }) => {
  const detailsAnime = await getAnime(`anime/${id}`)
  return (
    <>
      <Heading mx={10} mb={5}>
        Detail for - {detailsAnime.data.title}{" "}
      </Heading>
      <Card direction={{ base: "column", sm: "row" }} overflow="hidden" bg="gray.50" boxShadow="xl" mx={10} mb={10} p={5}>
        <Image rounded="xl" objectFit="cover" w={{ base: "100%", md: "35%" }} src={detailsAnime.data.images.webp.image_url} alt="..." />
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
    </>
  )
}

export default Page
