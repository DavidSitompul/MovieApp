import { Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const NotFound = () => {
  return (
    <div className="lg:px-24 lg:py-16 md:py-20 md:px-44 px-4 py-5 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="space-y-3">
              <Heading className="my-2 text-gray-800 font-bold text-2xl">Looks like you&apos;ve found the doorway to the great nothing</Heading>
              <Text className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</Text>
              <Link href="/" className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Back Now!!!!!
              </Link>
            </div>
          </div>
          <div>
            <Image className="" alt="..." src="https://i.ibb.co/G9DC8S0/404-2.png" fill />
          </div>
        </div>
      </div>
      <div>
        <Image alt="..." className="relative" src="https://i.ibb.co/ck1SGFJ/Group.png" fill />
      </div>
    </div>
  )
}

export default NotFound
