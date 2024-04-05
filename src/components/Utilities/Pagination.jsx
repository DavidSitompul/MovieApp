import { Button, Text } from "@chakra-ui/react"
import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "instant",
      top: 0,
      
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevState) => {
      if (page <= 1) {
        return 1
      }
      return prevState - 1
    })
    scrollTop()
  }

  const handlefirstpage = () => {
    setPage(1)
    scrollTop()
  }

  const handlelastpage = () => {
    setPage(lastPage)
    scrollTop()
  }

  return (
    <div className="flex flex-col md:flex-row gap-y-7 md:gap-y-0 my-16 justify-center items-center gap-x-6">
      {page <= 1 ? null : (
        <>
          <Button className="items-center flex justify-center" size="md" colorScheme="blue" onClick={handlefirstpage}>
            1
          </Button>
          <Button className="items-center flex justify-center" size="md" colorScheme="blue" onClick={handlePrevPage}>
            <GrPrevious size={14} />
          </Button>
        </>
      )}
      <Text className="bg-[#3182CE] p-1  rounded-lg items-center flex justify-center text-white" as="samp" size="md">
        {page} of {lastPage}
      </Text>
      {page >= lastPage ? null : (
        <>
          <Button className="items-center flex justify-center" onClick={handleNextPage} size="md" colorScheme="blue">
            <GrNext />
          </Button>
          <Button className="underline underline-offset-4 items-center flex justify-center" size="md" colorScheme="blue" onClick={handlelastpage}>
            {lastPage}
          </Button>
        </>
      )}
    </div>
  )
}

export default Pagination
