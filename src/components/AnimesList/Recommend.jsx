"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Card, Button, CardBody, Stack, Heading, Image, Center } from "@chakra-ui/react"
import { reproduce } from "@/services/api-lib"
import { GrFormPrevious, GrNext } from "react-icons/gr"

const ListRecommend = ({ api }) => {
  const [page, setPage] = useState(0)

  const handleNext = () => {
    setPage((prevState) => prevState + 10)
  }
  const handlePrev = () => {
    setPage((prevState) => prevState - 10)
  }

  const sliceData = api.data
  const newSlice = reproduce(sliceData, page)

  return (
    <>
      <div className="grid px-3 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:grid-cols-5">
        {newSlice.data.map((data, index) => {
          const [datas] = data.entry //destructering data image and title from data.entry
          // console.log(data)
          return (
            <Link href={`/anime/${datas.mal_id}`} className="" key={`${datas.mal_id}_${index}`}>
              <Card boxShadow="2xl" className="h-[370px]">
                <CardBody>
                  <Image src={datas.images.webp.image_url} alt="..." borderRadius="sm" className="h-[200px] w-full hover:scale-[102%] ease-in-out transition-all duration-300" />
                  <Stack mt="3">
                    <Heading size="md">
                      <Center className="text-center" noOfLines={3}>
                        {datas.title}
                      </Center>
                    </Heading>
                  </Stack>
                </CardBody>
                <Button size="md" height="30px" width="40%" ml="auto" mb={3} mr={4} colorScheme="blue">
                  Detail
                </Button>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="flex my-16 justify-center items-center">
        {page <= 4 ? null : (
          <Button leftIcon={<GrFormPrevious />} onClick={handlePrev} size="md" height="40px" width="15%" ml="5" mb={3} colorScheme="blue">
            Prev
          </Button>
        )}
        {page >= sliceData.length - 10 ? null : (
          <Button rightIcon={<GrNext />} onClick={handleNext} size="md" height="40px" width="15%" ml="5" mb={3} colorScheme="blue">
            Next
          </Button>
        )}
      </div>
    </>
  )
}

export default ListRecommend
