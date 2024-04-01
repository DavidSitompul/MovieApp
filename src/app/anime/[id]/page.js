import { getAnime } from "@/services/api-lib"
import VideoPlayer from "@/components/Utilities/videoPlayer"
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"
import React from "react"

const Page = async ({ params: { id } }) => {
  const detailsAnime = await getAnime(`anime/${id}`)

  console.log(detailsAnime)

  return (
    <>
      <div>Detail Rekomen Anime {id}</div>
      <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
        <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={detailsAnime.data.images.webp.image_url} alt="Caffe Latte" />

        <Stack>
          <CardBody>
            <Heading size="md">
              {detailsAnime.data.title} {detailsAnime.data.year}
            </Heading>
            <Text py="2">{detailsAnime.data.synopsis}</Text>
            <Box display="flex" gap={5}>
              <Text py="2">{detailsAnime.data.score}</Text>
              <Text py="2">{detailsAnime.data.episodes}</Text>
              <Text py="2">{detailsAnime.data.duration}</Text>
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