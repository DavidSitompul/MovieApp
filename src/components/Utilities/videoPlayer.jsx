"use client"
import { Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { FaCirclePlay } from "react-icons/fa6"

import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isopen, setIsOpen] = useState(true)
  const handleVideoPlayer = () => {
    setIsOpen((prevstate) => !prevstate)
  }
  const options = {
    width: "300",
    height: "250",
  }
  return (
    <>
      <div>
        {isopen ? (
          <div className="absolute right-0 bottom-0">
            <button onClick={handleVideoPlayer}>
              <IoIosCloseCircleOutline size={24} className="bg-red-500 text-white rounded-full" />
            </button>
            <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={options} />
          </div>
        ) : (
          <Button leftIcon={<FaCirclePlay />} onClick={handleVideoPlayer} colorScheme="teal" variant="solid" size="md">
            Trailer
          </Button>
        )}
      </div>
    </>
  )
}

export default VideoPlayer
