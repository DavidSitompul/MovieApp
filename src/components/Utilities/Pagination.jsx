import React from "react"

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
    <div>
      {page <= 1 ? null : <button onClick={handlePrevPage}>prev</button>}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : <button onClick={handleNextPage}>next</button>}
      <button onClick={handlelastpage}>last page</button>
    </div>
  )
}

export default Pagination
