"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Card, Button, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react"
import { reproduce } from "@/services/api-lib"
const ListRecommend = ({ api }) => {
  const [random, setRandom] = useState(10)

  const sliceData = api.data
  const newSlice = reproduce(sliceData, random, 10)
  const handleRandom = () => {
    setRandom(() => ~~(Math.random() * sliceData.length))
  }
  return (
    <div className="grid px-3 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:grid-cols-5">
      <>
        {newSlice.data.map((data, index) => {
          const [datas] = data.entry //destructering data image and title from data.entry
          // console.log(datas.length)
          return (
            <Link href={`/anime/${datas.mal_id}`} key={`${datas.mal_id}_${index}`}>
              <Card boxShadow="2xl" className="h-[420px]">
                <CardBody>
                  <Image src={datas.images.webp.image_url} alt="..." borderRadius="sm" className="h-[200px] w-full hover:scale-[102%] ease-in-out transition-all duration-300" />
                  <Stack mt="3">
                    <Heading size="md" noOfLines={1}>
                      {datas.title}
                    </Heading>
                    <Text noOfLines={3}>{data.content}</Text>
                  </Stack>
                </CardBody>
                <Button size="md" height="40px" width="30%" ml="5" mb={3} colorScheme="blue">
                  Detail
                </Button>
              </Card>
            </Link>
          )
        })}
        <div>
          <Button onClick={handleRandom} size="md" height="40px" width="30%" ml="5" mb={3} colorScheme="blue">
            Next
          </Button>
        </div>
      </>
    </div>
  )
}

export default ListRecommend

// data ditampilkan 10 dan api nya memilik data double
// sehingga jika menggunakan next dan prev kurang optimal
// data yang di tampilkan akan double
