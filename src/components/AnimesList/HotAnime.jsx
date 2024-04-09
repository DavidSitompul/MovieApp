"use client"
import React from "react"
import Link from "next/link"
import { Card, Text, CardBody, Stack, Heading, Image } from "@chakra-ui/react"

const HotAnime = ({ api }) => {
  return (
    <>
      {api.data?.map((coming, index) => {
        return (
          <Link href={`/anime/${coming.mal_id}`} className="" key={`${coming.mal_id}_${index}`}>
            <Card size="sm" boxShadow="lg" className="w-full mt-5">
              <CardBody display="flex" gap={5}>
                <Image src={coming.images.webp.image_url} alt="..." borderRadius="sm" className="h-[80px] w-[100px] hover:scale-[102%] ease-in-out transition-all duration-300" />
                <Stack>
                  <Heading noOfLines={2} fontSize="lg" size="lg">
                    {coming.title}
                  </Heading>
                  <Text fontSize="xs">release - {coming.year ? coming.year : "UpComing ..."}</Text>
                  <Text fontSize="xs">{coming.type}</Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        )
      })}
    </>
  )
}

export default HotAnime
