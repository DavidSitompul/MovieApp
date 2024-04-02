import { Button, Text } from "@chakra-ui/react"
import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"

const Pagination = ({ page, lastPage, setPage }) => {
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
  }
  const handlePrevPage = () => {
    setPage((prevState) => {
      if (page <= 1) {
        return null
      }
      return prevState - 1
    })
  }
  const handlelastpage = () => {
    setPage(lastPage)
  }
  return (
    <div className="flex flex-col md:flex-row gap-y-7 md:gap-y-0 my-16 justify-center items-center gap-x-6">
      {page <= 1 ? null : (
        <Button className="w-[15%] md:w-[10%] items-center flex justify-center" leftIcon={<GrPrevious size={14} />} size="md" height="40px" colorScheme="blue" onClick={handlePrevPage}>
          Prev
        </Button>
      )}
      <Text className="bg-[#3182CE] w-[15%] h-[40px] md:w-[10%] rounded-lg items-center flex justify-center text-white" as="samp" size="md">
        {page} of {lastPage}
      </Text>
      {page >= lastPage ? null : (
        <Button className="w-[15%] md:w-[10%] items-center flex justify-center" rightIcon={<GrNext size={14} />} onClick={handleNextPage} size="md" height="40px" colorScheme="blue">
          Next
        </Button>
      )}
      <Button className="w-[15%] md:w-[10%] items-center flex justify-center" size="md" height="40px" colorScheme="blue" onClick={handlelastpage}>
        Last page
      </Button>
    </div>
  )
}

export default Pagination
