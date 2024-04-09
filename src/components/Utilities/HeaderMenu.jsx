import React from "react"

const Page = ({ page, title }) => {
  return (
    <>
      <h1 className="text-2xl font-bold p-7">
        {title} {page}
      </h1>
    </>
  )
}

export default Page
