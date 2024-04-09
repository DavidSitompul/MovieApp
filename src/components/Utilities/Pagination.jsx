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
    <div className="flex flex-col gap-y-7  my-16  items-center gap-x-6">
      <div className="flex space-x-5">
        {page <= 1 ? null : (
          <>
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
          </>
        )}
      </div>

      <div className="space-x-5">
        <Button className="items-center flex justify-center" size="md" colorScheme="blue" onClick={handlefirstpage}>
          Back to page 1
        </Button>
        <Button className="items-center flex justify-center" size="md" colorScheme="blue" onClick={handlelastpage}>
          Next to page {lastPage}
        </Button>
      </div>
    </div>
  )
}

export default Pagination
