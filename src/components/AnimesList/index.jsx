"use client"
import React from "react"
import Link from "next/link"
import { Card, Button, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react"
const AnimesList = ({ title, img, id, content }) => {
  return (
    <div>
      <Link href={`/${id}`} className="">
        <Card boxShadow="2xl" className="h-[420px]">
          <CardBody>
            <Image src={img} alt="..." borderRadius="sm" className="h-[200px] w-full hover:scale-[102%] ease-in-out transition-all duration-300" />
            <Stack mt="3">
              <Heading size="md" noOfLines={1}>
                {title}
              </Heading>
              <Text noOfLines={3}>{content}</Text>
            </Stack>
          </CardBody>
          <Button size="md" height="40px" width="30%" ml="5" mb={3} colorScheme="blue">
            Detail
          </Button>
        </Card>
      </Link>
    </div>
  )
}

export default AnimesList
