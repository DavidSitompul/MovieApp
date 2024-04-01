"use client"
import React from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const options = {
    width: "300",
    height: "250",
  }
  return (
    <>
      <div>
        <button>
          <IoIosCloseCircleOutline />
        </button>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={options} />
      </div>
    </>
  )
}

export default VideoPlayer
