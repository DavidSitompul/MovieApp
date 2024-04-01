import React from "react"
import Link from "next/link"
import { Card, Button, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react"
const PopulerAnime = ({ api }) => {
  return (
    <div className="grid px-3 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:grid-cols-5">
      {api.data?.map((data) => {
        return (
          <Link href={`/anime/${data.mal_id}`} className="" key={data.mal_id}>
            <Card boxShadow="2xl" className="h-[420px]">
              <CardBody>
                <Image src={data.images.webp.image_url} alt="..." borderRadius="sm" className="h-[200px] w-full hover:scale-[102%] ease-in-out transition-all duration-300" />
                <Stack mt="3">
                  <Heading size="md" noOfLines={1}>
                    {data.title}
                  </Heading>
                  <Text noOfLines={3}>{data.synopsis}</Text>
                </Stack>
              </CardBody>
              <Button size="md" height="40px" width="30%" ml="5" mb={3} colorScheme="blue">
                Detail
              </Button>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export default PopulerAnime
