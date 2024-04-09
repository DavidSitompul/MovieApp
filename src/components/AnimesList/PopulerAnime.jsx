import React from "react"
import Link from "next/link"
import { Card, CardBody, Stack, Heading, Image } from "@chakra-ui/react"
const PopulerAnime = ({ api }) => {
  return (
    <div className="grid px-5 md:pl-12  xl:pl-8 2xl:pl-14 gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {api.data?.map((data) => {
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
  )
}

export default PopulerAnime
